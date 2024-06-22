const express = require("express");
const router = express.Router();
const {
  createCoffeeShop,
  getCoffeeShops,
  getCoffeeShopById,
  updateCoffeeShop,
  deleteCoffeeShop,
} = require("../controllers/coffeeShopController");

router.post("/coffee-shops", createCoffeeShop);
router.get("/coffee-shops", getCoffeeShops);
router.get("/coffee-shops/:id", getCoffeeShopById);
router.put("/coffee-shops/:id", updateCoffeeShop);
router.delete("/coffee-shops/:id", deleteCoffeeShop);

module.exports = router;
