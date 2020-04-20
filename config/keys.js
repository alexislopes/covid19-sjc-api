if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod-env");
} else {
  module.exports = require("./dev-env");
}
