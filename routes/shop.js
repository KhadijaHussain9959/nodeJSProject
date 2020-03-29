const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;

//res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//path joins all parts
//dirname add root of OS
// ../ move to view folder

// res.sendFile("./views/shop.html");
// that / is directing not to root of project but to OS
//thats why new path is imported

//res.send("<h1>hello from express</h1>");
//send a response in html
