'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 10; i++) {
  seed.push({
    id_client_order: faker.random.numeric(),
    progress: 1,
    zip_cod: `${faker.random.numeric(5)}-${faker.random.numeric(3)}`,
    st: `${faker.name.findName("Rua ")}`,
    house_number: faker.random.numeric(2),
    city: faker.name.findName(),
    state: faker.name.findName(),
    country: faker.name.findName(),
    price_gross: faker.random.numeric(2),
    discount: faker.random.numeric(1),
    shipping_total: faker.random.numeric(1),
    price_order_total: faker.random.numeric(2),
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('orders');
  }
};