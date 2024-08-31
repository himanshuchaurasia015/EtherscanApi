const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");

app.use(express.json());
dotenv.config();

module.exports = app;
