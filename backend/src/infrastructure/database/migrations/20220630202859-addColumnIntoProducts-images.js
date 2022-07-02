
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(
      "products", "id_image_product", {
         type: Sequelize.INTEGER,
          references: { model: 'image_product', key: 'id_img' },
          allowNull: true
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("id_image_product");
  }
};