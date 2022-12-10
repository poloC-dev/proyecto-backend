const express = require("express");
const {
  addCharacterController,
  getCharacterController,
  getCharacterByCharacterNameController,
  updateCharacterController,
  deleteCharacterController,
} = require("../controller/characterController");
const validator = require("../utils/validator");
const getQuoteMiddleware = require("../utils/getQuoteMiddleware");
const { body } = require("express-validator");
const router = express.Router();

router.get("/character", getCharacterController);
router.get("/character/:name", getCharacterByCharacterNameController);
router.put(
  "/character/:name",
  body("name", "Ingrese un nombre válido")
    .exists()
    .isString()
    .isLength({ min: 3, max: 15 }),
  body("lastname", "Ingrese un apellido válido")
    .exists()
    .isString()
    .isLength({ min: 3, max: 15 }),
  body("age", "Ingrese una edad válida").exists().isInt({ min: 1, max: 110 }),
  body("ocupation", "Ingrese una ocupacion válida")
    .exists()
    .isLength({ min: 1, max: 15 }),
  validator,
  updateCharacterController
);
router.post(
  "/character",
  body("name", "Ingrese un nombre válido")
    .exists()
    .isString()
    .isLength({ min: 3, max: 15 }),
  body("lastname", "Ingrese un apellido válido")
    .exists()
    .isString()
    .isLength({ min: 3, max: 15 }),
  body("age", "Ingrese una edad válida").exists().isInt({ min: 1, max: 110 }),
  body("ocupation", "Ingrese una ocupacion válida")
    .exists()
    .isLength({ min: 1, max: 15 }),
  validator,
  getQuoteMiddleware,
  addCharacterController
);
router.delete("/character/:name", deleteCharacterController);

module.exports = router;
