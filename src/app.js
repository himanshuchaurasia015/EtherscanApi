const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
const dbConnection = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");

app.use(express.json());
app.use("/api/address", transactionRoutes);
dotenv.config();
dbConnection();

module.exports = app;
