const prisma = require("../models/prisma");

const findNearbyCoffeeShops = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    if (!lat || !lng) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required." });
    }

    const radiusInKm = 5;

    const latitudeRange = {
      min: parseFloat(lat) - radiusInKm / 110.574,
      max: parseFloat(lat) + radiusInKm / 110.574,
    };

    const longitudeRange = {
      min:
        parseFloat(lng) -
        radiusInKm / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180)),
      max:
        parseFloat(lng) +
        radiusInKm / (111.32 * Math.cos((parseFloat(lat) * Math.PI) / 180)),
    };

    const nearbyLocations = await prisma.location.findMany({
      where: {
        lat: {
          gte: latitudeRange.min,
          lte: latitudeRange.max,
        },
        lng: {
          gte: longitudeRange.min,
          lte: longitudeRange.max,
        },
      },
    });

    const locationIds = nearbyLocations.map((location) => location.id);

    const nearbyCoffeeShops = await prisma.coffeeShop.findMany({
      where: {
        locationId: { in: locationIds },
      },
      include: {
        location: true,
        products: true,
        ratings: true,
      },
    });
    res.json({ nearbyCoffeeShops });
  } catch (error) {
    console.error("Error fetching nearby coffee shops:", error);
    res.status(500).json({ error: "Failed to fetch nearby coffee shops" });
  }
};
module.exports = { findNearbyCoffeeShops };
