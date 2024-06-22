const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
const session = require("express-session");
const prisma = require("./models/prisma");
const { OAuth2Client } = require("google-auth-library");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const coffeeShopRoutes = require("./routes/coffeeShopRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const locationRoutes = require("./routes/locationRoutes");
const nearMeRoutes = require("./routes/nearMeRoutes");

const app = express();
const port = process.env.PORT || 3000;
const clientID = process.env.CLIENTID || "";
const clientSecret = process.env.CLIENTSECRET || "";
const geokeyAPI = process.env.GEOKEY_API || "";
const client = new OAuth2Client(
  `${clientID}`,
);
let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

app.options("*", cors());
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", coffeeShopRoutes);
app.use("/api", locationRoutes);
app.use("/api", ratingRoutes);
app.use("/api", nearMeRoutes);

app.use(
  session({
    name: "session",
    secret: "xyz123",
    resave: false,
    saveUninitialized: false,
  }),
);

app.post("/api/auth/google", async (req, res) => {
  const { idToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience:
        `${clientID}`,
    });
    const payload = ticket.getPayload();
    res.status(200).json(payload);
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
});
app.get("/api/user", (req, res) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.post("/geocode", async (req, res) => {
  const { address } = req.body;

  try {
    const response = await fetch(
      `https://geokeo.com/geocode/v1/search.php?q=${encodeURIComponent(address)}&api=${geokeyAPI}`,
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    res.status(500).json({ error: "Error fetching geocode data" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  try {
    await prisma.$connect();
    console.log("Connected to Prisma");
  } catch (error) {
    console.error("Error connecting to Prisma:", error);
    process.exit(1);
  }
});

process.on("SIGINT", async () => {
  console.log("\nShutting down gracefully");
  try {
    await prisma.$disconnect();
    console.log("Disconnected from Prisma");
    process.exit(0);
  } catch (error) {
    console.error("Error disconnecting from Prisma:", error);
    process.exit(1);
  }
});
