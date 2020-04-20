const mongoose = require("mongoose");

mongoose.connect("", { useNewUrlParser: true });

require("./models/Informe");

const Informe = mongoose.model("Informe");

async function salva() {
  return await Informe.insertMany(array);
}

salva();
