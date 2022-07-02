'use strict';

const {
  faker
} = require('@faker-js/faker');

// let seed = []
// for (let i = 0; i < 10; i++) {
//   seed.push({
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
//     img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_119_ewte0g.png',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     data_status: 1
//   })
// }

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exhibitors', [
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_119_ewte0g.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_130_ytm155.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_131_mfoqf3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_132_pgs7dw.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_119_ewte0g.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
      profession: faker.lorem.lines(1),
      birth_date: new Date(),
      phone: '(11) 91234-5678',
      phrase: faker.lorem.lines(1),
      description: faker.lorem.lines(6),
      img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656554512/Imagens-Chefao/Rectangle_119_ewte0g.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      data_status: 1
    },
    ]
    )
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('exhibitors');

  }
};