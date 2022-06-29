'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 5; i++) {
  seed.push({
    id_product_category: faker.random.numeric(),
    name: `Category ${i+1}`,
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_product', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('category_product');
  }
};