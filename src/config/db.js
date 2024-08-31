const mongoose = require("mongoose");

const connection = async () =>
  await mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
    console.log("db is connected");
  });

module.exports = connection;
