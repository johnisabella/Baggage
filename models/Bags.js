var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BagsSchema = new Schema({
  // `name` must be unique and of type String
  BagName: {
    type: String,
    required: true,
    unique: true
  },
  BagType: {
    type: String,
    unique: false
  },
  BagDescription: {
    type: String,
    unique: false
  },
  BagItem:[
    {
      name: String,
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Bags = mongoose.model("Bags", BagsSchema);

// Export the User model
module.exports = Bags;
