const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//controller
const errorController = require("./controllers/error");

//template engines
app.set("view engine", "ejs");
app.set("views", "views");

//routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//this is func for it register middleware
// console.log req.body work bcoz of this .this always add next()

app.use(express.static(path.join(__dirname, "public")));
//public static

app.use("/admin", adminRoutes);
// admin data refer to all routes
app.use(shopRoutes);
// /admin in filter
// if dont use get and post, app.use just match startpath

app.use(errorController.get404);

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
