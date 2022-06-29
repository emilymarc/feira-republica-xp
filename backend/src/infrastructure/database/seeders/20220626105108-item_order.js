'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 10; i++) {
  seed.push({
    id_order_item_order: faker.random.numeric(),
    id_product_item_order: faker.random.numeric(),
    quantity: faker.random.numeric(),
    price_unity: faker.random.numeric(),
    shipping: faker.random.numeric(),
    price_total: faker.random.numeric(2),
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('item_order', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('item_order');
  }
};