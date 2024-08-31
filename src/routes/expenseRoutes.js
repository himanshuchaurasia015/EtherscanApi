const express = require("express");
const { getExpense } = require("../controllers/expenseController");
const router = express.Router();

router.get("/calculate", getExpense);

module.exports = router;
