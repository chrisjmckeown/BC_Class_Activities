const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 6, "Password must be 6 characters long."]
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
