var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UsersSchema = new Schema({
  // `name` must be unique and of type String
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("Users", UsersSchema);

// Export the User model
module.exports = Users;
