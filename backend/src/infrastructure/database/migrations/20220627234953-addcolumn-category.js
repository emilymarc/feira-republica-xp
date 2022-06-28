
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(
      "products", "id_category_product", {
         type: Sequelize.INTEGER,
          references: { model: 'category_products', key: 'id_category' },
          allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("id_category_product");
  }
};