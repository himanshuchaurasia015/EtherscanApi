const express = require("express");
const app = express();
const transactionRoutes = require("./routes/transactionRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const errorHandler = require("./utils/errorHandler");
const { fetchPrice } = require("./services/fetchCurrentPrice");

app.use(express.json());
app.use(errorHandler);

//routes
app.use("/api/v1/address", transactionRoutes);
app.use("/api/v1/expense", expenseRoutes);

// calling fetchPrice at the interval of 10min
setInterval(fetchPrice, 600000);

module.exports = app;
