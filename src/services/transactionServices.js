const axios = require("axios");
const addModel = require("../models/transactionModel");

//fetch all the transaction and store in db
const fetchTransaction = async (address) => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api`, {
      params: {
        module: "account",
        action: "txlist",
        address: address,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10,
        sort: "asc",
        apikey: process.env.APIKEY,
      },
    });

    const transactions = response.data.result;
    let addDocument = await addModel.findOne({ address });
    if (addDocument) {
      addDocument.transactions = transactions;
    } else {
      addDocument = await addModel.create({ address, transactions });
    }
    await addDocument.save();

    return addDocument;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

module.exports = { fetchTransaction };
