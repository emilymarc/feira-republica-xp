const db = require("../../../infrastructure/database");
const {
  DataTypes
} = require("sequelize");

const Orders = db.define(
  "orders", {
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
    zip_cod: {
      allowNull: false,
      type: DataTypes.STRING
    },
    st: {
      allowNull: false,
      type: DataTypes.STRING
    },
    house_number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    district: {
      allowNull: false,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price_gross: {
      type: DataTypes.DECIMAL(10, 2),
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    shipping_total: {
      type: DataTypes.DECIMAL(10, 2),
    },
    price_order_total: {
      type: DataTypes.DECIMAL(10, 2),
    },
    data_status: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "orders",
  }
);

module.exports = Orders;