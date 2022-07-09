const supertest = require("supertest");
const { app } = require("../../..");
const ExhibitorsController = require("./Exhibitors.controller");
const idExhibitorsValid = 3
const createEmail = `testExhibitors${idExhibitorsValid}@gmail${idExhibitorsValid*22}.com`
const updateEmail = `testExhibitors${idExhibitorsValid}@gmail${idExhibitorsValid*33}.com`

describe('metodo ()', () => {
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.getAllExhibitors).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.getOneExhibitor).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.getProductsExhibitor).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.createExhibitor).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.updateExhibitor).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof ExhibitorsController.deleteExhibitor).toBe('function')
    })
})

describe('No controller, ao executar função', () => {

    describe('create', () => {
        test('em caso de sucesso, deve retornar 201', async () => {
            const res = await supertest(app)
                .post('/exhibitors')
                .send({
                    name: "Lurdes Faria",
                    profession: "Pintora - Pintura em azulejos",
                    birth_date: "2022-06-30 05:21:47",
                    phone: "(11)91234-5678",
                    phrase: "Imaginar minha vida sem fazer cerâmica seria a mesma coisa de imaginar uma árvore vivendo sem água",
                    description: "Pintora com vasta experiência no mercado",
                    email: createEmail,
                    password: "12345678",
                    img: "string"
                })

            expect(res.status).toBe(201)
        })
    })
    describe('Teste de rotas get expositores ()', () => {
        test('Recuperando todos os expositores com get /exhibitors', async () => {
            const res = await supertest(app).get('/exhibitors')
            expect(res.status).toBe(200)
        })
        test('Recuperando expositor por ID get /exhibitors/:idExhibitors', async () => {
            const res = await supertest(app).get(`/exhibitors/${idExhibitorsValid}`)
            expect(res.status).toBe(200)
        })
    })
    describe('Teste de rotas get produtos por expositores ()', () => {
        test('Recuperando todos os produtos por expositores com get /exhibitors', async () => {
            const res = await supertest(app).get(`/exhibitors/${idExhibitorsValid}/products`)
            expect(res.status).toBe(200)
        })
        test('Recuperando expositor por ID get /exhibitors/:idExhibitors', async () => {
            const res = await supertest(app).get(`/exhibitors/${idExhibitorsValid}`)
            expect(res.status).toBe(200)
        })
    })
    describe('Atualizando user', () => {
        test('em caso de sucesso, deve retornar 201', async () => {
            const res = await supertest(app)
                .put(`/exhibitors/${idExhibitorsValid}`)
                .send({
                    name: "Augusto Nino",
                    email: updateEmail,
                    password: "12345678",
                    profession: "Pintora - Pintura em azulejos",
                    birth_date: "2022-06-30 05:21:47",
                    phone: " (11) 91234-5678",
                    phrase: "Imaginar minha vida sem fazer cerâmica seria a mesma coisa de imaginar uma árvore vivendo sem água",
                    description: "Pintora com vasta experiência no mercado",
                    img: "https://res.cloudinary.com/dwb977d8l/image/upload/v1656854902/Imagens-Chefao/artesao-trabalhando-730x480_dxba5d.jpg"
                }).expect(201);
        })
    })
    describe('Deletando expositor', () => {
        test('em caso de sucesso, deve retornar 204', async () => {
            const res = await supertest(app)
                .delete(`/exhibitors/${idExhibitorsValid}/deletar`)
                .expect(204);
        })
    })

})