const PersonajeModel = require("../../models/personajes.models");

const getCharacterService = async () => {
  return PersonajeModel.find();
};

module.exports = getCharacterService;
