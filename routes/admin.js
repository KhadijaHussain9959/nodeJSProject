const path = require("path");

const express = require("express");

//const rootDir = require("../util/path");
const productsController = require("../controllers/products");

const router = express.Router();

// /admin.add-product => GET

router.get("/add-product", productsController.getAddProduct);

// /admin.add-product => POST

router.post("/add-product", productsController.postAddProduct);

module.exports = router;

//console.log(req.body);
//body m jo hoga add that will display that  run bcz of bodyparser

//return page with form
//   res.send(
//     '<html><form action="/admin/add-product" method="POST"><input type="text" name="title">
//      <button type="submit">add product</button></form></html>'
//   );
