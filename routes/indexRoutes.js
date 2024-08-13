const express = require("express");
const IndexRoutes = express.Router();
const UserRoutes = require("../routes/userRoutes");
const EmoRoutes = require("../routes/empRoutes");

IndexRoutes.use("/user", UserRoutes);
IndexRoutes.use("/emp", EmoRoutes);

module.exports = IndexRoutes;
