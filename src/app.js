const express = require("express");
const app = express();
const transactionRoutes = require("./routes/transactionRoutes");
const errorHandler = require("./utils/errorHandler");
const { fetchPrice } = require("./services/fetchCurrentPrice");

app.use(express.json());
app.use("/api/v1/address", transactionRoutes);
app.use(errorHandler);

// calling fetchPrice at the interval of 10min
setInterval(fetchPrice, 600000);


module.exports = app;
