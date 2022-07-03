const { DataTypes } = require("sequelize");
const db = require("../../../infrastructure/database");

const Categories = db.define(
    'category_products',
    {
      id_category: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_product_category: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
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
  
  module.exports = Categories