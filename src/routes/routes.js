const express = require("express");
const {
  addCharacterController,
  getCharacterController,
  getCharacterByCharacterNameController,
  updateCharacterController,
  deleteCharacterController,
} = require("../controller/characterController");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const router = express.Router();

router.get("/character", getCharacterController);
router.get("/character/:name", getCharacterByCharacterNameController);
router.put("/character/:name", updateCharacterController);
router.post(
  "/character",
  body("name").isLength({ min: 3, max: 15 }),
  body("lastname").isLength({ min: 3, max: 15 }),
  body("age").isNumeric({ min: 1, max: 100 }),
  body("ocupation").isLength({ min: 4, max: 25 }),
  validator,
  addCharacterController
);
router.delete("/character/:name", deleteCharacterController);

module.exports = router;
