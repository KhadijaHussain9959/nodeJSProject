const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//this is func for it register middleware
// console.log req.body work bcoz of this .this always add next()

app.use("/add-product", (req, res, next) => {
  //return page with form
  res.send(
    '<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></html>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);

  //body m jo hoga add that will display that  run bcz of bodyparser
  res.redirect("/");
  //redirect to slash
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
  //send a response
});

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);
//incoming req

//next is funtion to travel req to other layer

//if more modules
// const server = http.createServer(routes.handler,routes.second );
//take request listener as arg which is function
// execute for every incoming request
//   console.log(req.url, req.method, req.headers);
//req of incoming request node object
//process.exit();
