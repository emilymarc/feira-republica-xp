const db = require("../../../infrastructure/database/index");
const { DataTypes } = require("sequelize");

const Address = db.define("address_client", {
    id_adress_client: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_client_address: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'clients',
            },
            key: 'id_client_address'
        },
        allowNull: false
    },
    zip_cod: {
        allowNull: false,
        type: DataTypes.STRING
    },
    st: {
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
    country: {
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

},

    {
        tableName: 'address_client',

    });

module.exports = Address;
