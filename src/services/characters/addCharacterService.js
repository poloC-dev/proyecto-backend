const PersonajeModel = require("../../models/personajes.models");

const addCharacterService = async (req, res) => {
  const character = req.body;
  character.quote = req.quote;
  const newCharacter = new PersonajeModel(character);
  await newCharacter.save();
  return character;
};

module.exports = addCharacterService;
