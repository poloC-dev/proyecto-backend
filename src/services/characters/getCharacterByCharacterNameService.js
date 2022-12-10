const PersonajeModel = require("../../models/personajes.models");

const getCharacterByCharacterNameService = async (req) => {
  const { name } = req.params;
  const response = await PersonajeModel.findOne({ name: name });
  if (!response) throw new Error(`No existe el personaje ${name}.`);
  return name;
};

module.exports = getCharacterByCharacterNameService;
