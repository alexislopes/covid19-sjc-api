const mongoose = require("mongoose");

const Informe = mongoose.model("Informe");

async function findAll() {
  return await Informe.find({});
}

async function create(informe) {
  return await Informe.create(informe);
}

module.exports = { findAll, create };
