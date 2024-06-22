const prisma = require("../models/prisma");

const createRating = async (req, res) => {
  try {
    const rating = await prisma.rating.create({ data: req.body });
    res.json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllRatings = async (req, res) => {
  try {
    const ratings = await prisma.rating.findMany();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRatingById = async (req, res) => {
  try {
    const rating = await prisma.rating.findUnique({
      where: { id: req.params.id },
    });
    res.json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRating = async (req, res) => {
  try {
    const rating = await prisma.rating.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRating = async (req, res) => {
  try {
    await prisma.rating.delete({ where: { id: req.params.id } });
    res.json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRating,
  getAllRatings,
  getRatingById,
  updateRating,
  deleteRating,
};
