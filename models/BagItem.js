var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BagItemSchema = new Schema({
  // `name` must be unique and of type String
  ItemName: {
    type: String,
    required: true,
    unique: true
  },
  ItemQuantity: {
    type: Number,
    unique: false
  },
  ItemCategory: {
    type: String,
    unique: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var BagItem = mongoose.model("BagItem", BagItemSchema);

// Export the User model
module.exports = BagItem;
