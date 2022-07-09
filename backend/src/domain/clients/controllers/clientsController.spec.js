const supertest = require("supertest");
const {
  app
} = require("../../..");
const {
  faker
} = require('@faker-js/faker');
const ClientsController = require("./clientsController");
const clientIDValid = 3;
const clientToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jbGllbnQiOjExLCJuYW1lIjoiVG9uaW8gTHVtYSIsImVtYWlsIjoiVG9uaW8uTHVtYUBnbWFpbC5jb20iLCJhZGRyZXNzX2NsaWVudHMiOltdLCJpYXQiOjE2NTcxOTk2NjUsImV4cCI6MzYwMDE2NTcxOTYwNjV9.-SimWUD8LuJo5h3xo3ZH4IZpWYxf350tqxDoI5bEqjU";


describe('No controller, ao executar a função', () => {

  describe('listAllClients', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ClientsController.listAllClients).toBe('function')
    });

    test('sucesso se buscou todos os clientes', async () => {
      const response = await supertest(app)
        .get(`/clients`)
        .set('Authorization', clientToken)
        .expect(200);
    })
  })

  describe('listClientPerId', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ClientsController.listClientPerId).toBe('function')
    });

    test('sucesso se buscou um cliente', async () => {
      const response = await supertest(app)
        .get(`/clients/${clientIDValid}`)
        .set('Authorization', clientToken)
        .expect(200);
    })
  })

  describe('createClient', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ClientsController.createClient).toBe('function')
    });

    test('sucesso se criou um cliente', async () => {
      const response = await supertest(app)
        .post(`/clients`)
        .send({
          "name": faker.name.findName(),
          "email": `test${clientIDValid}_${faker.internet.email()}`,
          "password": "123456"
        })
        .expect(201);
    })
  })

  describe('updateClient', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ClientsController.updateClient).toBe('function')
    });

    test('sucesso se alterou um cliente', async () => {
      const response = await supertest(app)
        .patch(`/clients/${clientIDValid}`)
        .send({
          "name": faker.name.findName(),
          "email": `test${clientIDValid}_${faker.internet.email()}`,
          "password": "12345678"
        })
        .set('Authorization', clientToken)
        .expect(200);
    })
  })

  describe('deleteClient', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ClientsController.deleteClient).toBe('function')
    });

    test('sucesso se deletou um cliente', async () => {
      const response = await supertest(app)
        .delete(`/clients/${clientIDValid}`)
        .set('Authorization', clientToken)
        .expect(204);
    })

    test('sucesso se não encontrou o cliente', async () => {
      const response = await supertest(app)
        .get(`/clients/${clientIDValid}`)
        .set('Authorization', clientToken)
        
        expect(response.body).toBe("Nenhum Cliente cadastrado com essas informações!");
    })
  })

})