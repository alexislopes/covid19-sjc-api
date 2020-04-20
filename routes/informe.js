const { findAll } = require("../services/informeServices");

module.exports = (app) => {
  app.get("/informe", async (req, res) => {
    const informes = await findAll();
    res.status(201).json({
      informes: informes,
      error: false,
    });
  });
};
