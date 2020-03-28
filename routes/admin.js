const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  //return page with form
  res.send(
    '<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></html>'
  );
});

router.post("/product", (req, res, next) => {
  //incoming request app get
  //incoming request app post
  console.log(req.body);

  //body m jo hoga add that will display that  run bcz of bodyparser
  res.redirect("/");
  //redirect to slash
});

module.exports = router;
