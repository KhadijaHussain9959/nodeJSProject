const http = require("http"); //./ local module
//htt core module
// can use http modules

// function rqListener(req, res) {}
// http.createServer(rqListener);
//take request listener as arg which is function
// execute for every incoming request

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //req of incoming request node object
  //process.exit();

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>"); //lines of response
  res.write("<body>");
  res.write("<h1> hello from my node.js server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
//incoming req
