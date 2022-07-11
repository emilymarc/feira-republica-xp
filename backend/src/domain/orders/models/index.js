const  Orders  = require('./orders');
const  ItemOrder  = require('./item_order');
const  Products  = require('../../products/models/Products');
const Categories  = require("../../products/models/Categories");
const { Exhibitors } = require("../../exhibitors/models/index");
const ImagesProducts = require("../../products/models/ImagesProducts");

Orders.hasMany(ItemOrder, {
    foreignKey: 'id_order_item_order'
  });
ItemOrder.belongsTo(Orders, {
    foreignKey: 'id_order_item_order'
  });

  Products.hasMany(ItemOrder, {
    foreignKey: 'id_product_item_order'
  });
ItemOrder.belongsTo(Products, {
    foreignKey: 'id_product_item_order'
  });

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
    Orders,
    ItemOrder,
    Products,
    ImagesProducts,
    Exhibitors,
    Categories,
};
