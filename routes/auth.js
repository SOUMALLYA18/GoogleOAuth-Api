const express = require("express");
const router = express.Router();
const passport = require("passport");

// Step 1: Initiate Google Authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Handle Google Authentication Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // On success, redirect or respond as needed
    console.log("User authenticated successfully:", req.user); // Log the authenticated user
    res.redirect("/profile"); // Redirect to a profile or dashboard page
  }
);

module.exports = router;
