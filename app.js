const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//this is func for it register middleware
// console.log req.body work bcoz of this .this always add next()

app.use("/admin", adminRoutes);
// /admin in filter
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not founddd</h1>");
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
