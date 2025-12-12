// backend/models/Cloth.js
const mongoose = require("mongoose");

const clothSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  condition: { type: String, enum: ["New", "Used", "Worn"], default: "Used" },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cloth", clothSchema);
