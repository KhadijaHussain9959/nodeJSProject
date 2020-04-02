const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
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
