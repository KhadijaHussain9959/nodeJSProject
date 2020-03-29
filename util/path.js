const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

//res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// __dirname, "../",  this will remove and will give nicer look
