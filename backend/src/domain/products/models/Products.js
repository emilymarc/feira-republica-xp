const { Model, DataTypes } = require("sequelize");
const db = require("../../../infrastructure/database");

const Products = db.define(
    'products',
    {
      code_product: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_exhibitors_product: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      characteristics: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      materials: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      observations: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      stock_product: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      data_status: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    }
  )
  
  module.exports = Products