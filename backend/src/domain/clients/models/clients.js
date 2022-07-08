const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Clients = db.define("clients", {
    id_client: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      img: {
        type: DataTypes.INTEGER
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
},
{
    tableName: "clients",
}
);

module.exports = Clients;