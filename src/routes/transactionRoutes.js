const express = require("express");
const { getTransactions } = require("../controllers/transactionControllers");

const router = express.Router();

router.post("/transactions", getTransactions);

module.exports = router;
