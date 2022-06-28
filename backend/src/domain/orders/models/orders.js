const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Orders = db.define(
  "orders",
  {
    order: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_client_order: {
      type: DataTypes.INTEGER,
    },
    progress: {
      type: DataTypes.INTEGER,
    },
    price_gross: {
      type: DataTypes.DECIMAL(6,2),
    },
    discount: {
      type: DataTypes.DECIMAL(6,2),
    },
    shipping_total: {
      type: DataTypes.DECIMAL(6,2),
    },
    price_order_total: {
      type: DataTypes.DECIMAL(6,2),
    },
    data_status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "orders",
  }
);

module.exports = Orders;