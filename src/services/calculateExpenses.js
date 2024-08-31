const transactionModel = require("../models/transactionModel");
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

module.exports = { calculateTotalExpenses };
