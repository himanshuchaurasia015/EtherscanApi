const { fetchTransaction } = require("../services/transactionServices.js");

const getTransactions = async (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({
      error: "address is undefined",
    });
  }
  const transaction = await fetchTransaction(address);
  if (transaction.length === 0) {
    return res.status(400).json({
      message: "transaction is not found",
    });
  } else {
    res.status(200).json({
      message: "Transactions fetched and stored successfully",
      address: result.address,
      transactions: result.transactions,
    });
  }
};

module.exports = { getTransactions };
