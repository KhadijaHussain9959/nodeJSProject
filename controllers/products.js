// const products = [];
//model m batadia

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
  //redirect to slash
};

exports.getProduct = (req, res, next) => {
  // const products = adminData.products;
  Product.fetchAll((products) => {
    //call back will get this
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });

  //res.sendFile(path.join(rootDir, "views", "shop.html"));
};
