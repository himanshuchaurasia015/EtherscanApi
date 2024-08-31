const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
const dbConnection = require("./config/db");
const transactionRoutes =require("./routes/transactionRoutes")

app.use(express.json());
app.use('/api/address', transactionRoutes);
dotenv.config();
dbConnection();

// axios
//   .get(`https://api.etherscan.io/api`, {
//     params: {
//       module: "account",
//       action: "txlist",
//       address: "0xce94e5621a5f7068253c42558c147480f38b5e0d",
//       startblock: 0,
//       endblock: 99999999,
//       page: 1,
//       offset: 10,
//       sort: "asc",
//       apikey: process.env.APIKEY,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
module.exports = app;
