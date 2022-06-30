const { Products } = require("../../products/models");
const ImagesProducts = require("./ImagesProducts");

ImagesProducts.belongsTo(Products, {
    foreignKey: "id_product_img",
    as: "images"
});

Products.hasMany(ImagesProducts, {
    foreignKey: "id_product_img",
    as: "images"
});

module.exports = {
    ImagesProducts,
    Products
}