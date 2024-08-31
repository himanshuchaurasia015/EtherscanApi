const { fetchTransaction } = require("../services/transactionServices.js");

//fetch  all transaction and store in db and return transactions
const getTransactions = async (req, res) => {
  try {
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
        address: transaction.address,
        transactions: transaction.transactions,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getTransactions };
