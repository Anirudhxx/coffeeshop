const express = require("express");
const {
  createRating,
  getAllRatings,
  getRatingById,
  updateRating,
  deleteRating,
} = require("../controllers/ratingController");

const router = express.Router();

router.post("/", createRating);
router.get("/", getAllRatings);
router.get("/:id", getRatingById);
router.put("/:id", updateRating);
router.delete("/:id", deleteRating);

module.exports = router;
