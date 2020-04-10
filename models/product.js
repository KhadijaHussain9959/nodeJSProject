// single entity
// const products = [];

const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

// const fs = require("fs");
// const path = require("path");

// module.exports = class Product {
//   constructor(t) {
//     this.title = t;
//     //t is title
//   }

//   save() {
//     //function store objects
//     //products.push(this);
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "products.json"
//     );
//     //read file
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       if (!err) {
//         // if no error file content
//         products = JSON.parse(fileContent);
//       }
//       products.push(this);

//       //take js convert to JSON
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data",
//       "products.json"
//     );
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       }
//       cb(JSON.parse(fileContent));
//     });
//     //return products;
//   }
// };
