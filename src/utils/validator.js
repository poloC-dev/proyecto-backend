const { validationResult } = require("express-validator");

const validator = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = validator;
// crear un middleware propio, no usar el de arriba
