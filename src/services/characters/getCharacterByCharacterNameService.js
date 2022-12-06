const PersonajeModel = require("../../models/personajes.models");

const getCharacterByCharacterNameService = async (req) => {
  const { name } = req.params;
  return PersonajeModel.findOne({ name: name });
};

module.exports = getCharacterByCharacterNameService;
