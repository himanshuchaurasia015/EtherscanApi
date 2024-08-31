const axios = require("axios");
const priceModel = require("../models/etheriumPriceModel");

//fetch price of etherium and store in db
const fetchPrice = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    );
    const price = await priceModel.create({
      price: response.data.ethereum.inr,
    });
    console.log(price);
    return response.data.ethereum.inr;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchPrice };
