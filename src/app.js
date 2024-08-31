const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
const dbConnection = require("./config/db");

app.use(express.json());
dotenv.config();
dbConnection();

module.exports = app;
