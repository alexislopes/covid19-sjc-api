const mongoose = require("mongoose");

const Informe = mongoose.model("Informe");

async function findAll() {
  const informes = await Informe.find({});

  return await informes.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
}

async function create(informe) {
  return await Informe.create(informe);
}

module.exports = { findAll, create };
