const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const keys = require("./config/keys");

const PORT = process.env.PORT || 5000;

require("./models/Informe");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

app.listen(PORT, () => {
  console.log("app is listening on port ", PORT);
}); //http://localhost:5000
