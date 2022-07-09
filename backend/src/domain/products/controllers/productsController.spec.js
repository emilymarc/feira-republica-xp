const supertest = require("supertest");
const {
  app
} = require("../../..");
const {
  faker
} = require('@faker-js/faker');
const ProductsController = require("./productsController");
const exhibitorsIDValid = 2;
const codeProductValid = 21;
const categoryValid = "ceramicas";
const findTerm = "Ju";
// const FormData  = require('form-data');


describe('No controller, ao executar a função', () => {

  describe('list', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.list).toBe('function')
    });

    test('sucesso se buscou todos os products', async () => {
      const response = await supertest(app)
        .get(`/products`)
        .expect(200);
    })
  })

  describe('findOne', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.findOne).toBe('function')
    });

    test('sucesso se buscou um product', async () => {
      const response = await supertest(app)
        .get(`/products/${codeProductValid}`)
        .expect(200);
    })
  })

  describe('findByCategory', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.findByCategory).toBe('function')
    });

    test('sucesso se buscou os products da categoria especificada.', async () => {
      const response = await supertest(app)
        .get(`/products/categories/${categoryValid}`)
        .expect(200);
    })
  })

  describe('findByTerm', () => {

    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.findByTerm).toBe('function')
    });

    test('sucesso se buscou os products do termo especificado.', async () => {
      const response = await supertest(app)
        .get(`/products/search/${findTerm}`)
        .expect(200);
    })
  })

  describe('createProduct', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.createProduct).toBe('function')
    });

    test('sucesso se criou um product.', async () => {
      // let formData = new FormData();

      // formData.append('name', 'Vaso Monasu');
      // formData.append('description', 'Vaso muito bonito, feito com muito amor e carinho.')
      // formData.append('characteristics', 'Tamanho 7 cm de altura e 15 cm')
      // formData.append('materials', 'Argila, porcelana, tinta acrílica')
      // formData.append('observations', 'Produto frágil, manusear com cuidado. ')
      // formData.append('stock_product', '11');
      // formData.append('price', '99.99');
      // formData.append('category', 'Ceramica');
      // formData.append('img', [] );


      const response = await supertest(app)
        .post(`/products/${exhibitorsIDValid}`)
        .send(
          // formData
          {
          "name":"Vaso Monasu",
          "description":"Vaso muito bonito, feito com muito amor e carinho.",
          "characteristics":"Tamanho 7 cm de altura e 15 cm",
          "materials":"Argila, porcelana, tinta acrílica",
          "observations":"Produto frágil, manusear com cuidado.",
          "stock_product":"11",
          "price":"99.99",
          "category":"Ceramica"
        }
        )
        .expect(201);
        // console.log(response.body.imgs)
        // expect(response.body.imgs).not.toBeNull()
    })
  })

  describe('updateProduct', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.updateProduct).toBe('function')
    });

    test('sucesso se alterou um product.', async () => {
      const response = await supertest(app)
        .put(`/products/${codeProductValid}`)
        .send(
          {
            "name":"Vaso Aslianom",
            "description":"É um vaso de cultura indiana que com designer do século XX...",
            "characteristics":"altura 15cm, largura 25cm, espessura 5cm",
            "materials":"cerâmica, tinta óleo, barro.",
            "observations":"Muito delicado, cuidado ao manusear.",
            "stock_product":"20",
            "price":"29.99"
        }
        )
        .expect(200);
       
    })
  })

  describe('deleteProduct', () => {
    test('caso sucesso é do tipo function.', () => {
      expect(typeof ProductsController.deleteProduct).toBe('function')
    });

    test('sucesso se deletou um product.', async () => {
      const response = await supertest(app)
        .delete(`/products/${codeProductValid}/remove`)
        .expect(204);
    })

    test('sucesso se não achou um product', async () => {
      const response = await supertest(app)
        .get(`/products/${codeProductValid}`)
        .expect(400);
    })
  })

})