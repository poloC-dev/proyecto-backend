const PersonajeModel = require("../../models/personajes.models");

const addCharacterService = async (req) => {
  const character = req.body;
  const newCharacter = new PersonajeModel(character);
  await newCharacter.save();
  return character;
};

module.exports = addCharacterService;
