const { model, Schema } = require("mongoose");

const PersonajeSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre del personaje es requerido."],
    unique: true,
  },
  lastname: {
    type: String,
    required: [true, "El apellido del personaje es obligatorio"],
  },
  age: {
    type: Number,
    required: [true, "La edad del personaje es obligatoria"],
  },
  ocupation: {
    type: String,
    required: [true, "La ocupacion del personaje es obligatoria"],
  },
  created_at: { type: Date, default: new Date() },
});

const PersonajeModel = model("Personaje", PersonajeSchema);

module.exports = PersonajeModel;
