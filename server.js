const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const path = require("path");
var logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));
//  app.use(logger("dev"));
//  app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(bodyParser.json());
//  app.use(express.static("public"));
//}

app.use(express.static("client/build"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.Promise = Promise;
//mongoose.connect("mongodb://ec2-13-59-152-223.us-east-2.compute.amazonaws.com/Bags" , {
mongoose.connect("mongodb://localhost/BagsDB" , {
//useMongoClient: true
});

// Send every request to the React app
// Define any API routes before this runs

//app.get("*", function(req, res) {
// res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});

//Find all bags
app.get("/api/bags", function(req, res) {
  db.Bags.find({})
    .then(function(dbBags) {
      console.log("bag test");
      res.json(dbBags);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Add new bags
app.post("/api/bags", function(req, res) {
  db.Bags.create(req.body)
  .then(function(dbBags) {
    res.json(dbBags);
  })
  .catch(function(err) {
    res.json(err);
  });
});

//Post username and password
app.post("/api/login", function(req, res) {
  console.log(req.body);
  db.Users.findOne(
    {
      email: req.body.email, password1: req.body.password1
    },
    function(error, found) {
      // log any errors
      if (found == null) {
        console.log("This is an error message.");
        res.status(401).send(error);
      }
      else {
        // Otherwise, send the note to the browser
        // This will fire off the success function of the ajax request
        console.log("found user");
        console.log(found);
        res.send(found);
      }
    }
  );
});

//Create new username and password
app.post("/api/username", function(req, res) {
  console.log("Hello World");
  console.log(req);
  db.Users.create(req.body)
  .then(function(dbUsers) {
    res.json(dbUsers);
    console.log("user is new");
  })
  .catch(function(err) {
    res.json(err);
    console.log("user exists");
  });
});

app.get("/api/listusernames", function(req, res) {
  db.Users.find({})
    .then(function(dbUsers) {
      res.json(dbUsers);
    })
    .catch(function(err) {
      res.json(err);
    });
});



  //Add item to bag
  // app.post("/bagitems", function(req, res) {
  //  console.log("itemcreated");
  //  db.BagItem.create(req.body)
  //  .then(function(dbBagItems) {
  //    return db.Bags.findOneAndUpdate({}, {$push: {BagItem: dbBagItems._id} }, {new: true});
  //  })
  //  .then(function(dbBags) {
  //    res.json(dbBags);
  //  })
  //  .catch(function(err) {
  //    res.json(err);
  //  });
  // });

  app.post("/api/bags/:id/items", function(req, res) {
    console.log("item created", req.body, 'test');
    db.BagItem.create(req.body)
    .then(function(item) {
      console.log(item);
      //find a bag & update by Id
     return db.Bags.findOneAndUpdate({_id:req.params.id},
        {$push: {"BagItem": item._id} }, {new: true})
        .then(function(bag) {
          console.log(bag);
          res.json(bag);
        })
        .catch(function(err) {
          res.json(err);
        });
    })
});

//Get item from a specific bag
app.get("/api/bags/:id", (req, res) => {
  db.Bags.findById(req.params.id)
    .populate('BagItem')
    .then(function(dbBag) {
      res.json(dbBag);
    })
    .catch(function(err) {
      res.json(err);
    });
})

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
