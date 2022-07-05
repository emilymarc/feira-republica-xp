'use strict';

const {
  faker
} = require('@faker-js/faker');

const categories = ["Ceramicas","Colares", "Pinturas" ];


let seed = []
for (let i = 0; i < 20; i++) {
  seed.push({
    id_product_category: i + 1,
    name: categories[Math.floor(Math.random() * 3)],
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_products', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('category_product');
  }
};