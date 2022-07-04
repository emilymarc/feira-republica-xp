const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Exhibitors = db.define(
  'exhibitors',
  {
    id_exhibitors: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    profession: {
      allowNull: false,
      type: DataTypes.STRING
    },
    birth_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phrase: {
      allowNull: true,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
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

module.exports = Exhibitors