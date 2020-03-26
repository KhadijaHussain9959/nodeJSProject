const fs = require("fs");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Name</title></head>"); //lines of response
    res.write(
      '<body><form action="/message"  method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>'
    );
    //action is /message which is url k kisko request jaye
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    //data is ready to read and function to be execute on new data
    const body = [];
    req.on("data", chunk => {
      console.log("hello chunk");
      console.log(chunk);
      body.push(chunk);
      //new data will be add in body
      //chunk is new data
    });
    return req.on("end", () => {
      //add all data chunks in buffer
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); //input
      const message = parsedBody.split("=")[1]; //one is after =
      fs.writeFileSync("message.txt", message, err => {
        //redirection
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>"); //lines of response
  res.write("<body>");
  res.write("<h1> hello from my node.js server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = reqHandler;

//if more modules
// module.exports={
//     handler:reqHandler,
//     second: secModule
//  }

//OR

// module.exports.handler = reqHandler;
// module.exports.second = "hard core ";

//OR

// exports.handler = reqHandler;
// exports.second = "hard core ";
