const prisma = require("../models/prisma");

const createCoffeeShop = async (req, res) => {
  try {
    const coffeeShop = await prisma.coffeeShop.create({ data: req.body });
    res.json(coffeeShop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCoffeeShops = async (req, res) => {
  try {
    const coffeeShops = await prisma.coffeeShop.findMany({
      include: {
        location: true,
        products: true,
        ratings: true,
      },
    });
    res.json(coffeeShops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCoffeeShopById = async (req, res) => {
  try {
    const coffeeShop = await prisma.coffeeShop.findUnique({
      where: { id: req.params.id },
      include: {
        location: true,
        products: true,
      },
    });
    res.json(coffeeShop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCoffeeShop = async (req, res) => {
  try {
    const coffeeShop = await prisma.coffeeShop.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(coffeeShop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCoffeeShop = async (req, res) => {
  try {
    await prisma.coffeeShop.delete({ where: { id: req.params.id } });
    res.json({ message: "Coffee shop deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCoffeeShop,
  getCoffeeShops,
  getCoffeeShopById,
  updateCoffeeShop,
  deleteCoffeeShop,
};
