const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("this always run first");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in add product firmware");
  res.send("<h1>hello from add product</h1>"); //send a response
});

app.use("/", (req, res, next) => {
  console.log("in express firmware");
  res.send("<h1>hello from express</h1>"); //send a response
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
