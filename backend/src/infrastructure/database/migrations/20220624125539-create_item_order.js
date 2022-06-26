'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('item_order', {
      id_item_order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       id_order_item_order: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'orders',
          },
          key: 'order'
        },
        allowNull: false
      },
      id_product_item_order: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products',
          },
          key: 'code_product'
        },
        allowNull: false
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price_unity: {
        allowNull: false,
        type: Sequelize.DECIMAL(6,2)
      },
      shipping: {
        allowNull: false,
        type: Sequelize.DECIMAL(6,2)
      },
      price_total: {
        allowNull: false,
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
    await queryInterface.dropTable('item_order');
  }
};
