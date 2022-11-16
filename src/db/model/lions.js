const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  lionName: {
    type: String,
    required: true,
  },
  lionAge: {
    type: Number,
    required: true,
  },
  lionFrom: {
    type: String,
  },
});

const Lion = mongoose.model("lion", schema);
module.exports = Lion;
