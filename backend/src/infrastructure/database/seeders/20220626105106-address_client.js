'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 10; i++) {
  seed.push({
    id_client_address: faker.random.numeric(),
    zip_cod: `${faker.random.numeric(5)}-${faker.random.numeric(3)}`,
    st: `${faker.name.findName("Rua ")} nº ${faker.random.numeric(3)}`,
    city: faker.name.findName(),
    state: faker.name.findName(),
    country: faker.name.findName(),
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('address_client', seed)
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('address_client');
  }
};