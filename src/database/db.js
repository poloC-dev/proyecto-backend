const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE = process.env.DATABASE_URL || "";

(async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log("Base de datos conectada titán :D");
  } catch (error) {
    console.error(error);
  }
})();

module.exports = mongoose;
