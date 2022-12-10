const { validationResult } = require("express-validator");

const validator = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
  next();
};

// const validator = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log(req.body);
//     const valores = req.body;
//     const validaciones = errors.array();
//     res.render("index", { validaciones: validaciones, valores: valores });
//   } else {
//     res.send("Validacion completada!");
//     next();
//   }
// };
module.exports = validator;
