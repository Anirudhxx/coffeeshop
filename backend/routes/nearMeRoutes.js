const express = require("express");
const router = express.Router();
const { findNearbyCoffeeShops } = require("../controllers/nearMeController");

router.post("/near-me", findNearbyCoffeeShops);

module.exports = router;
