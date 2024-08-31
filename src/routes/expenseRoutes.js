const express = require("express");
const { calcExpense } = require("../controllers/expenseController");
const router = express.Router();

router.get("/calculate", calcExpense);

module.exports = router;
