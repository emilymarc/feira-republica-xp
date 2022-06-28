'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for (let i = 0; i < 10; i++) {
  seed.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: '12345678',
    img: 'url_image_fake',
    createdAt: new Date(),
    updatedAt: new Date(),
    data_status: 1
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shops', seed)
  },

  async down(queryInterface, Sequelize) {

    // await queryInterface.bulkDelete('shops');

  }
};