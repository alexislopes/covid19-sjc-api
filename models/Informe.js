const mongoose = require("mongoose");
const { Schema } = mongoose;

const Informe = new Schema({
  timestamp: Number,
  casos_suspeitos: Number,
  obitos_suspeitos: Number,
  casos_positivos: Number,
  obitos_positivos: Number,
  obitos_descartados: Number,
  casos_recuperados: Number,
  positivo_casa: Number,
  positivo_hospital: Number,
  suspeitos_casa: Number,
  suspeitos_hospital: Number,
  positivo_publico_enfermaria: Number,
  positivo_publico_uti: Number,
  positivo_privado_enfermaria: Number,
  positivo_privado_uti: Number,
  suspeito_publico_enfermaria: Number,
  suspeito_publico_uti: Number,
  suspeito_privado_enfermaria: Number,
  suspeito_privado_uti: Number,
});

mongoose.model("Informe", Informe);
