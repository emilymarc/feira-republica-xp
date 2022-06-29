const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const ItemOrder = db.define(
  "item_order",
  {
    id_item_order: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_order_item_order: {
      type: DataTypes.INTEGER,
    },
    id_product_item_order: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price_unity: {
      type: DataTypes.DECIMAL(6,2),
    },
    shipping: {
      type: DataTypes.DECIMAL(6,2),
    },
    price_total: {
      type: DataTypes.DECIMAL(6,2),
    },
    data_status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "item_order",
  }
);

module.exports = ItemOrder;