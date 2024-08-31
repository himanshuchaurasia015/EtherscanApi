const axios = require("axios");
const addModel = require("../models/transactionModel");

const fetchTransaction = async (address) => {
  try {
    const response = axios.get(`https://api.etherscan.io/api`, {
      params: {
        module: "account",
        action: "txlist",
        address: "0xce94e5621a5f7068253c42558c147480f38b5e0d",
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
      addDocument = await Address.create({ address, transactions });
    }
    await addDocument.save();

    return addDocument;
  } catch (error) {
    throw new Error("Failed to fetch or save transactions");
  }
};
