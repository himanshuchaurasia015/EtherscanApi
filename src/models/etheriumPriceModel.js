const mongoose = require("mongoose");

const priceSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prices", priceSchema);
