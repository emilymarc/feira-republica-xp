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
        name: 'José Carlos Sanchez',
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: 'Pintor - Pintura em azulejos',
        birth_date: "1946-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: 'Eu faço o que eu faço porque eu fico feliz em pensar que um pedaço da minha história está fazendo parte da casa de outras pessoas',
        description: 'José Carlos, nascido na cidade de São Paulo, é filho de imigrantes colombianos que se mudaram para o Brasil no início de 1940. Aprendeu a pintar em sua comunidade, e decidiu se diferenciar de pinturas tradicionais em tela pintando em azulejos. Sua técnica permite que o azulejo seja lavado por varias vezes sem perder a pintura, desde que seja usado um pano úmido e sabão',
        img: 'https://res.cloudinary.com/republica-hippie/image/upload/v1657396778/exhibitors/Rectangle_119_vvnttt.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: 'Madalena Silva dos Santos',
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: 'Artesã - Ceramista',
        birth_date: "1956-07-01 05:21:47",
        phone: '(11) 98765-4321',
        phrase: '“Imaginar minha vida sem fazer cerâmica seria a mesma coisa de imaginar uma árvore vivendo sem água”',
        description:

          'Nascida em Itiúba, no interior da Bahia, Madalena teve contato desde cedo com a cerâmica, trabalhando principalmente com argila, aprendendo várias técnicas com sua mãe. Começou fazendo pequenos e simples vasos, e com o tempo aprendeu não apenas a fazer outros objetos, como também aprendeu a fazer formas mais complexas Com 19 anos, Madalena se casou e se mudou com seu marido para São Paulo em busca de melhores condições.Enquanto seu marido trabalhava, Madalena vendia seus vasos de argila. Em busca de fazer sua arte mais bonita ainda, ela aprendeu tecnicas de pintura.Sua técnica impressionou muita gente, e acima de tudo, gerou uma grande satisfação em Madalena com sua própria arte e estilo!'
        ,
        img: 'https://res.cloudinary.com/republica-hippie/image/upload/v1657396778/exhibitors/Rectangle_130_milomi.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: 'Maria Lúcia Pereira',
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: 'Artesã - Colares e pulseiras',
        birth_date: "1942-04-05 05:21:47",
        phone: '(11) 94524-4851',
        phrase: 'Eu amo como posso criar coisas diferentes com coisas simples como sementes e pedras',
        description: 'Maria Lúcia sempre gostou de fazer colares, pulseiras e outros acessórios do tipo. Desde pequena, quando morava em uma chácara com seus pais, pegava as sementes de lágrima-de-nossa-senhora, furava e usava as linhas de sua mãe para fazer os colares. Mais tarde, buscou aprender novos modelos de colares e outros tipos de sementes que poderia usar para fazer. Assim, começou a usar semente de açaí, de olho-de-cabra, entre outros, até que um dia decidiu usar pedras, tipo quartzos, em suas criações. Além de saber fazer esses acessórios, ela sabe também sobre a origem das coisas que usa, e sempre tem histórias para contar sobre essas peças!',
        img: 'https://res.cloudinary.com/republica-hippie/image/upload/v1657396778/exhibitors/Rectangle_131_xkgna7.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: 'Roberto Klein',
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: 'Pintor - Pintura em telas',
        birth_date: "1986-05-05 05:21:47",
        phone: '(11) 99845-8451',
        phrase: 'Minhas telas são representações visuais dos meus sentimentos no momento',
        description: 'Filho de pais engenheiros. Roberto não teve muito contato com a arte quando mais novo, mas após contato mais profundo, decidiu que não seguiria a carreira de seus pais: queria mesmo era expressar seus sentimentos em telas! Assim, com resistência dos pais, fez curso de desenho e em seguida de pintura, para que pudesse exercer sua paixão como pelo menos um hobbie. Até o momento, Roberto já pintou pelo menos 50 telas, e não desejar parar o seu trabalho tão cedo!',
        img: 'https://res.cloudinary.com/republica-hippie/image/upload/v1657396778/exhibitors/Rectangle_132_p1sjmk.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPCN7IG2Gkjyz.ToOnqS6TO',
        profession: faker.lorem.lines(1),
        birth_date: "1958-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: faker.lorem.lines(1),
        description: faker.lorem.lines(6),
        img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656854902/Imagens-Chefao/artesao-trabalhando-730x480_dxba5d.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: faker.lorem.lines(1),
        birth_date: "1984-07-05 05:21:47",
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
        birth_date: "1964-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: faker.lorem.lines(1),
        description: faker.lorem.lines(6),
        img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656854786/Imagens-Chefao/artes%C3%A3o_1034771065_ep5m8p.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: faker.lorem.lines(1),
        birth_date: "1968-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: faker.lorem.lines(1),
        description: faker.lorem.lines(6),
        img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656854785/Imagens-Chefao/transferir_1_bfldcy.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: faker.lorem.lines(1),
        birth_date: "1998-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: faker.lorem.lines(1),
        description: faker.lorem.lines(6),
        img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656854785/Imagens-Chefao/transferir_o9i6yu.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        data_status: 1
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '$2a$10$/LY08X0AvQfRdznlMn1yn.OBdbWVNZ7QPC7IG2Gkjyz.ToOnqS6TO',
        profession: faker.lorem.lines(1),
        birth_date: "1975-07-05 05:21:47",
        phone: '(11) 91234-5678',
        phrase: faker.lorem.lines(1),
        description: faker.lorem.lines(6),
        img: 'https://res.cloudinary.com/dwb977d8l/image/upload/v1656854785/Imagens-Chefao/images_oszfht.jpg',
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