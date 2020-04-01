const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//template engines

app.set("vire engine", "ejs");
app.set("views", "view");

//routes

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//this is func for it register middleware
// console.log req.body work bcoz of this .this always add next()

app.use(express.static(path.join(__dirname, "public")));
//public static

app.use("/admin", adminData.routes);
// admin data refer to all routes
app.use(shopRoutes);
// /admin in filter
// if dont use get and post, app.use just match startpath

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
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
