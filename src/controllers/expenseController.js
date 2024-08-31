const { calculateTotalExpenses } = require("../services/calculateExpenses");
const { fetchPrice } = require("../services/fetchCurrentPrice");

const getExpense = async (req, res) => {
  try {
    const { address } = req.query;
    if (!address) {
      return res.status(400).json({
        message: "Invalid address",
      });
    }

    const totalExpense = await calculateTotalExpenses(address);
    const price = await fetchPrice();
    res.status(200).json({
      totalExpense,
      price,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getExpense };
