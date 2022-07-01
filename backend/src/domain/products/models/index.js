const Products = require("../models/Products");
const { Shops } = require("../../shops/models/index");
const { Categories } = require("../../categories/models/index");
const { ImagesProducts } = require("../../imagesProducts/models");

Products.belongsTo(Shops, {
    foreignKey: "id_shoop_product",
});

Shops.hasMany(Products, {
    foreignKey: "id_shoop_product",
});

Products.belongsTo(Categories, {
    foreignKey: "id_category_product",
});

Categories.hasMany(Products, {
    foreignKey: "id_category_product",
});

//
Products.belongsTo(ImagesProducts, {
    foreignKey: "id_image_product",
});

ImagesProducts.hasMany(Products, {
    foreignKey: "id_image_product",
});

module.exports = {
    Products,
    Shops,
    ImagesProducts
};