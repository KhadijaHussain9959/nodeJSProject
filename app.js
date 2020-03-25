const http = require("http");
const fs = require("fs");

//take request listener as arg which is function
// execute for every incoming request

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //req of incoming request node object
  //process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Name</title></head>"); //lines of response
    res.write(
      '<body><form action="/message"  method="POST"><input type="text"></input><button type="submit">Send</button></form></body>'
    );
    res.write("</html>"); //action is /message which is url k kisko request jaye
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
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
