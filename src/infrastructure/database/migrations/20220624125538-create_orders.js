'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client_order: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'clients',
          },
          key: 'id_client'
        },
        allowNull: false
      },
      progress: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      zip_cod: {
        allowNull: false,
        type: Sequelize.STRING
      },
      st: {
        allowNull: false,
        type: Sequelize.STRING
      },
      house_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      district: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price_gross: {
        type: Sequelize.DECIMAL(10,2)
      },
      discount: {
        type: Sequelize.DECIMAL(10,2)
      },
      shipping_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      price_order_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};