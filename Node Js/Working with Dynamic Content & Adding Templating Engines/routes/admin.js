const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const { title } = require("process");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // layout: false, //Used In Handlebars For Stop Locating In Default Route
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
