const http = require("http"); //./ local module
//htt core module
// can use http modules

// function rqListener(req, res) {}
// http.createServer(rqListener);
//take request listener as arg which is function
// execute for every incoming request

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
//incoming req
