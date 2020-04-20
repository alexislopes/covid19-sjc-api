const mongoose = require("mongoose");

const Informe = mongoose.model("Informe");

async function findAll() {
  return await Informe.find({});
}

module.exports = { findAll };
