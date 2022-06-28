const Products = require("../models/Products");
const { Shops } = require("../../shops/models/index");
const { Categories } = require("../../categories/models/index");

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


module.exports = {
    Products,
    Shops
};