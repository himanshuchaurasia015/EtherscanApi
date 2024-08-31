const mongoose = require("mongoose");

const priceSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Prices", priceSchema);
