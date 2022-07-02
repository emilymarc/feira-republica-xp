const Products = require("../models/Products");
const Categories  = require("../models/Categories");
const { Exhibitors } = require("../../exhibitors/models/index");
// const { ImagesProducts } = require("../../imagesProducts/models");

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

//
// Products.belongsTo(ImagesProducts, {
//     foreignKey: "id_product_img",
// });

// ImagesProducts.hasMany(Products, {
//     foreignKey: "id_product_img",
// });

module.exports = {
    Products,
    // ImagesProducts,
    Exhibitors,
    Categories,
};