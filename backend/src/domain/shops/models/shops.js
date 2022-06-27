const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Shops = db.define(
  'shops',
  {
    id_shop: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    img: {
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

module.exports = Shops