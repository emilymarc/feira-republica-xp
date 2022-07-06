const supertest = require("supertest");
const {
    app
} = require("../../..");
const orderController = require("./orders.controller");



describe('No controller, ao executar a função', () => {

    describe('createOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.createOrder).toBe('function')
        });
    })

    describe('allOrders', () => {

        test('sucesso caso existam orders', async () => {
            const response = await supertest(app)
            .get('/orders')
            .expect(200);
            
        })
    })

})