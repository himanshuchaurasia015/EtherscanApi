const { calculateTotalExpenses } = require("../services/calculateExpenses");
const { getLatestPrice } = require("../services/calculateExpenses");


//calculate total expense and current price
const getExpense = async (req, res) => {
  try {
    const { address } = req.query;
    if (!address) {
      return res.status(400).json({
        message: "Invalid address",
      });
    }

    const totalExpense = await calculateTotalExpenses(address);
    const price = await getLatestPrice();
    res.status(200).json({
      totalExpense,
      price,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getExpense };
