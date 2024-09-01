const express = require("express");
const { getTransactions } = require("../controllers/transactionControllers");

const router = express.Router();

router.get("/gettransactions", getTransactions);

module.exports = router;
