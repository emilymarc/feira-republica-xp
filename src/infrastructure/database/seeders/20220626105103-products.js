'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 20; i++) {
  seed.push({
    id_exhibitors_product: faker.random.numeric(),
    name: faker.name.findName(),
    description: faker.lorem.lines(1),
    characteristics: faker.lorem.lines(1),
    materials: faker.lorem.lines(1),
    observations: faker.lorem.lines(1),
    stock_product: faker.random.numeric(2),
    price: faker.random.numeric(2),
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('products');
  }
};