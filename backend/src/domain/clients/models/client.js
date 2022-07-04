const db = require("../../../infrastructure/database/index");
const DataTypes  = require("sequelize");

const Clients = db.define("client", {
	id_client: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	img: {
		type: DataTypes.STRING,
		allowNull: true,
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
		type: DataTypes.INTEGER
	},
});

module.exports = Clients;
