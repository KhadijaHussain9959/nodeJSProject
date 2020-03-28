const express = require("express");

const router = express.Router();

// /admin.add-product => GET

router.get("/add-product", (req, res, next) => {
  //return page with form
  res.send(
    '<html><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></html>'
  );
});

// /admin.add-product => POST

router.post("/add-product", (req, res, next) => {
  //incoming request app get
  //incoming request app post
  console.log(req.body);
  //body m jo hoga add that will display that  run bcz of bodyparser
  res.redirect("/");
  //redirect to slash
});

module.exports = router;
