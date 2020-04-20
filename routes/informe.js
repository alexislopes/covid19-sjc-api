const { findAll, create } = require("../services/informeServices");

module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.json({ message: "Working" });
  });

  app.get("/informe", async (req, res) => {
    const informes = await findAll();
    res.status(200).json({
      informes: informes,
      error: false,
    });
  });

  app.post("/informe", async (req, res) => {
    const createdInforme = await create(req.body);

    res.status(201).json({
      informe: createdInforme,
      error: false,
    });
  });
};
