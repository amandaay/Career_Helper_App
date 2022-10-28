const express = require("express");
const router = express.Router();
const { register } = require("../controllers/register.js");

//Yian Chen
router.post("/", register);

router.get("/", (req, res) => {
  res.status(200).redirect("/register.html");
});

module.exports = router;
