const axios = require("axios");

const getQuoteMiddleware = async (req, res, next) => {
  const { data } = await axios.get("https://zenquotes.io/api/random");
  req.quote = data[0].q;
  return next();
};

module.exports = getQuoteMiddleware;
