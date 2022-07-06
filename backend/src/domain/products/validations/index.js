const createProduct  = require("./products/createProduct");
const updateProduct = require("./products/updateProduct");
const deleteProduct = require("./products/deleteProduct");
const findOne = require("./products/findOne");
const findByCategory = require("./products/findByCategory");
const findByTerm = require("./products/findByTerm");


const ProductsValidation = {
  createProduct,
  updateProduct,
  deleteProduct,
  findOne,
  findByCategory,
  findByTerm  
};


module.exports = ProductsValidation;

