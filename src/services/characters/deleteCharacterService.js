const PersonajeModel = require("../../models/personajes.models");

const deleteCharacterService = async (req) => {
  const { name } = req.params;
  const response = await PersonajeModel.deleteOne({ name: name });
  if (response.deletedCount == 0)
    throw new Error(`No se encontro el usuario ${name}.`);
  return name;
};

module.exports = deleteCharacterService;
