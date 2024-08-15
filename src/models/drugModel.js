const mongoose = require("mongoose");

// Here declare the scchema of the mongo model
var productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  Price: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    unique: true,
  },

  stock: {
    type: String,
  },
});
module.exports = mongoose.model("Drug", productSchema);
