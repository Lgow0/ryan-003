// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 27017;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error:", err))

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


// Routes
const clothRoutes = require("./models/routes/clothRoutes");
app.use("/api/clothes", clothRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
