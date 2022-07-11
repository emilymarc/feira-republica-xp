const supertest = require("supertest");
const {
    app
} = require("../../..");
const {
    faker
} = require('@faker-js/faker');
const orderController = require("./orders.controller");
const clientToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jbGllbnQiOjExLCJuYW1lIjoiVG9uaW8gTHVtYSIsImVtYWlsIjoiVG9uaW8uTHVtYUBnbWFpbC5jb20iLCJhZGRyZXNzX2NsaWVudHMiOltdLCJpYXQiOjE2NTcxOTk2NjUsImV4cCI6MzYwMDE2NTcxOTYwNjV9.-SimWUD8LuJo5h3xo3ZH4IZpWYxf350tqxDoI5bEqjU";
const clientID = 2;
const idOrderOfClient = 13;

describe('No controller, ao executar a função', () => {

    describe('createOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.createOrder).toBe('function')
        });

        test('sucesso se criou uma order.', async () => {
            const response = await supertest(app)
                .post(`/orders/${clientID}`)
                .send({
                    "zip_cod": "59042-590",
                    "st": "Rua  Considine nº 197",
                    "house_number": "70",
                    "district": "Mr. Kristi Feeney",
                    "city": "Dr. Levi Rippin",
                    "state": "Mrs. Bob Price",
                    "items_order": [
                        {
                            "id_product": "21",
                            "quantity": "3",
                            "price_product": "99.99"
                        },
                        {
                            "id_product": "22",
                            "quantity": "1",
                            "price_product": "99.99"
                        },
                        {
                            "id_product": "23",
                            "quantity": "2",
                            "price_product": "99.99"
                        }
                    ]
                })
                .set('Accept', 'application/json')
                .set('Authorization', clientToken)
                .expect(201);

            expect(response.body.progress).toBe(1)
            expect(response.body.id_client_order).toBe(clientID)
            expect(response.body.data_status).toBe(1)
            expect(response.body.item_orders).not.toBeNull()

        })
    })

    describe('allOrders', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.allOrders).toBe('function')
        });

        test('sucesso caso existam orders', async () => {
            const response = await supertest(app)
                .get('/orders')
                .set('Authorization', clientToken)
                .expect(200);

            expect(await response.status).toBe(200)
        })
    })

    describe('clientOrders', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.clientOrders).toBe('function')
        });

        test('sucesso caso existam orders do client especificado', async () => {
            const response = await supertest(app)
                .get(`/orders/${clientID}`)
                .set('Authorization', clientToken)
                .expect(200);

        })
    })

    describe('detailOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.detailOrder).toBe('function')
        });

        test('sucesso caso exista a order especificada', async () => {
            const response = await supertest(app)
                .get(`/orders/${clientID}/${idOrderOfClient}`)
                .set('Authorization', clientToken)
                .expect(200);
        })
    })

    describe('updateOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.updateOrder).toBe('function')
        });

        test('sucesso caso altere a order especificada', async () => {
            const response = await supertest(app)
                .patch(`/orders/${clientID}/${idOrderOfClient}`)
                .set('Authorization', clientToken)
                .send({
                    "progress": 2
                })
                .expect(200)
        })
    })

    describe('cancelOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.cancelOrder).toBe('function')
        });

        test('sucesso caso cancele a order especificada', async () => {
            const response = await supertest(app)
                .delete(`/orders/${clientID}/${idOrderOfClient}`)
                .set('Authorization', clientToken)
                .expect(204)
        })
    })

})