const mongoose = require("mongoose");

const AlienSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tech: { type: String, required: true },
  sub: { type: Boolean, xrequired: true, default: false },
});
module.exports = mongoose.model("Alien", AlienSchema);
