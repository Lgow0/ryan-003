// backend/routes/clothRoutes.js
const express = require("express");
const router = express.Router();
const Cloth = require("../cloth");

// GET all clothes
router.get("/", async (req, res) => {
  try {
    const clothes = await Cloth.find();
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single cloth
router.get("/:id", async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id);
    if (!cloth) return res.status(404).json({ message: "Cloth not found" });
    res.json(cloth);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new cloth
router.post("/", async (req, res) => {
  const cloth = new Cloth({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    size: req.body.size,
    condition: req.body.condition,
    imageUrl: req.body.imageUrl,
  });
  try {
    const newCloth = await cloth.save();
    res.status(201).json(newCloth);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update cloth
router.put("/:id", async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id);
    if (!cloth) return res.status(404).json({ message: "Cloth not found" });

    cloth.name = req.body.name || cloth.name;
    cloth.description = req.body.description || cloth.description;
    cloth.price = req.body.price || cloth.price;
    cloth.size = req.body.size || cloth.size;
    cloth.condition = req.body.condition || cloth.condition;
    cloth.imageUrl = req.body.imageUrl || cloth.imageUrl;

    const updatedCloth = await cloth.save();
    res.json(updatedCloth);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE cloth
router.delete("/:id", async (req, res) => {
  try {
    const cloth = await Cloth.findById(req.params.id);
    if (!cloth) return res.status(404).json({ message: "Cloth not found" });

    await cloth.remove();
    res.json({ message: "Cloth deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
