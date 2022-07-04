const { Model, DataTypes } = require("sequelize");
const db = require("../../../infrastructure/database");

const ImagesProducts = db.define(
    'image_product',
    {
      id_img: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_product_img: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      url_img: {
        type: DataTypes.STRING,
        allowNull: false
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
    },{
    tableName: "image_product"
    }
  )
  
  module.exports = ImagesProducts