const PersonajeModel = require("../../models/personajes.models");

const deleteCharacterService = async (req) => {
  const { name } = req.params;
  const response = await PersonajeModel.deleteOne({ name: name });
  if (response.deletedCount == 0)
    throw new Error(`No existe el personaje ${name}.`);
  return name;
};

module.exports = deleteCharacterService;