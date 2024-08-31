const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const errorHandler = require("./utils/errorHandler");
const {fetchPrice} =require("./services/fetchCurrentPrice")

app.use(express.json());
app.use("/api/v1/address", transactionRoutes);
app.use(errorHandler);

dotenv.config();
dbConnection();

module.exports = app;
