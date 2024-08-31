const app = require("./app");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
