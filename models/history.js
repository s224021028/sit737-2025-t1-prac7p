const mongoose = require("mongoose");

// Define calculation schema
const historySchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true,
    enum: ["add", "sub", "mul", "div", "exp", "sqrt", "mod"]
  },
  num1: {
    type: Number,
    required: true
  },
  num2: {
    type: Number,
    required: false,

  },
  result: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("History", historySchema)