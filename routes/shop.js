const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
  //send a response
});

module.exports = router;
