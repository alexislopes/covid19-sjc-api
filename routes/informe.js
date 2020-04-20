const { findAll } = require("../services/informeServices");

module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.json({ message: "Working" });
  });

  app.get("/informe", async (req, res) => {
    const informes = await findAll();
    res.status(201).json({
      informes: informes,
      error: false,
    });
  });
};
