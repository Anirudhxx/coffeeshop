const express = require("express");
const router = express.Router();
const passport = require("passport");
const prisma = require("../models/prisma");
const { OAuth2Client } = require("google-auth-library");
const { CLIENT_ID } = require("../config/config");

const client = new OAuth2Client(CLIENT_ID);

router.post("/auth/google", async (req, res) => {
  const { idToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    res.status(200).json(payload);
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;
