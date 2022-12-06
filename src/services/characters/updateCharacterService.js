const PersonajeModel = require("../../models/personajes.models");

const updateCharacterService = async (req) => {
  const { name } = req.params;
  const character = req.body;
  const updateCharacter = await PersonajeModel.findOne({ name: name });
  updateCharacter.name = character.name;
  updateCharacter.lastname = character.lastname;
  updateCharacter.age = character.age;
  updateCharacter.ocupation = character.ocupation;
  await updateCharacter.save();
  return updateCharacter.name;
};

module.exports = updateCharacterService;
