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
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Find all bags
app.get("/api/bags", function(req, res) {
  db.Bags.find({})
    .then(function(dbBags) {
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

//Get all username and password
app.get("/api/username", function(req, res) {
  db.Users.find({})
    .then(function(dbUsers) {
      res.json(dbUsers);
    })
    .catch(function(err) {
      res.json(err);
    });
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

//Add item to bag
app.post("/bagitems", function(req, res) {
  db.BagItems.create(req.body)
  .then(function(dbBagItems) {
    return db.Bags.findOneAndUpdate({}, {$push: {BagItem: dbBagItems._id} }, {new: true});
  })
  .then(function(dbBags) {
    res.json(dbBags);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
