const addCharacterService = require("../services/characters/addCharacterService");
const deleteCharacterService = require("../services/characters/deleteCharacterService");
const getCharacterByCharacterNameService = require("../services/characters/getCharacterByCharacterNameService");
const getCharacterService = require("../services/characters/getCharacterService");
const updateCharacterService = require("../services/characters/updateCharacterService");

const getCharacterController = async (req, res) => {
  try {
    const characters = await getCharacterService();
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getCharacterByCharacterNameController = async (req, res) => {
  try {
    const characters = await getCharacterByCharacterNameService(req);
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addCharacterController = async (req, res) => {
  try {
    const addChar = await addCharacterService(req);
    res
      .status(201)
      .json({ message: `Se ha creado el personaje ${addChar.name}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateCharacterController = async (req, res) => {
  try {
    const updateUser = await updateCharacterService(req);
    res.status(200).json({ message: `Se modifico el usuario ${updateUser}` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteCharacterController = async (req, res) => {
  try {
    const delChar = await deleteCharacterService(req);
    res.json({ message: `Personaje ${delChar} eliminado con exito` });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  getCharacterController,
  addCharacterController,
  getCharacterByCharacterNameController,
  deleteCharacterController,
  updateCharacterController,
};
