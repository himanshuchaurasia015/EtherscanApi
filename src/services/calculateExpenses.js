const transactionModel = require("../models/transactionModel");
const priceModel = require("../models/etheriumPriceModel");

//calculate the total expense using all transaction stored in db
const calculateTotalExpenses = async (address) => {
  try {
    transactionDocument = await transactionModel.findOne({ address });
    if (!transactionDocument) {
      return -1;
    } else {
      const transactions = transactionDocument.transactions;
      const totalExpense = transactions.reduce((total, trx) => {
        const gasUsed = parseFloat(trx.gasUsed);
        const gasPrice = parseFloat(trx.gasPrice);
        const expense = (gasUsed * gasPrice) / 1e18;
        return total + expense;
      }, 0);

      return totalExpense;
    }
  } catch (error) {
    console.log(error);
  }
};

//fetch latest price stored in db
const getLatestPrice = async () => {
  try {
    const latestDoc = await priceModel.findOne().sort({ createdAt: -1 });
    return latestDoc.price;
  } catch (error) {
    console.log("Error fetching the latest price:", error.message);
  }
};

module.exports = { calculateTotalExpenses, getLatestPrice };
