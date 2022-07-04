const Products = require("../models/Products");
const Categories  = require("../models/Categories");
const { Exhibitors } = require("../../exhibitors/models/index");
const ImagesProducts = require("../models/ImagesProducts");

Products.belongsTo(Exhibitors, {
    foreignKey: "id_exhibitors_product",
});

Exhibitors.hasMany(Products, {
    foreignKey: "id_exhibitors_product",
});

Products.hasMany(Categories, {
    foreignKey: "id_product_category",
});

Categories.belongsTo(Products, {
    foreignKey: "id_product_category",
});

Products.hasMany(ImagesProducts, {
    foreignKey: "id_product_img",
});

ImagesProducts.belongsTo(Products, {
    foreignKey: "id_product_img",
});

module.exports = {
    Products,
    ImagesProducts,
    Exhibitors,
    Categories,
};