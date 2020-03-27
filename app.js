const http = require("http");

const express = require("express");

const app = express();

const server = http.createServer(app);
//if more modules
// const server = http.createServer(routes.handler,routes.second );

//take request listener as arg which is function
// execute for every incoming request
//   console.log(req.url, req.method, req.headers);
//req of incoming request node object
//process.exit();

server.listen(3000);
//incoming req
