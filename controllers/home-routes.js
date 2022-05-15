const router = require("express").Router();
const { User } = require("../models/");

// homepage
router.get("/", (req, res) => {
  res.render("home");
});

// mylibrary
router.get("/mylibrary", (req, res) => {
  res.render("mylibrary");
});


module.exports = router;
