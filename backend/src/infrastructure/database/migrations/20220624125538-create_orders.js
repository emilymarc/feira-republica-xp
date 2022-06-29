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
      price_gross: {
        type: Sequelize.DECIMAL(6,2)
      },
      discount: {
        type: Sequelize.DECIMAL(6,2)
      },
      shipping_total: {
        type: Sequelize.DECIMAL(6,2)
      },
      price_order_total: {
        type: Sequelize.DECIMAL(6,2)
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