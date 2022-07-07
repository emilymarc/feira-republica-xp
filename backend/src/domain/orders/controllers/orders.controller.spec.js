const supertest = require("supertest");
const {
    app
} = require("../../..");
const orderController = require("./orders.controller");
const validToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jbGllbnQiOjExLCJuYW1lIjoiVG9uaW8gTHVtYSIsImVtYWlsIjoiVG9uaW8uTHVtYUBnbWFpbC5jb20iLCJhZGRyZXNzX2NsaWVudHMiOltdLCJpYXQiOjE2NTcxOTk2NjUsImV4cCI6MzYwMDE2NTcxOTYwNjV9.-SimWUD8LuJo5h3xo3ZH4IZpWYxf350tqxDoI5bEqjU";
const validClient = 2;

describe('No controller, ao executar a função', () => {

    describe('createOrder', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.createOrder).toBe('function')
        });

        test('sucesso se criou uma order.', async () => {
            const response = await supertest(app)
                .post(`/orders/${validClient}`)
                .send(               
                    [
                        {
                            "id_product": "2",
                            "quantity": "3",
                            "price_product": "19.59"
                        },
                        {
                            "id_product": "3",
                            "quantity": "1",
                            "price_product": "39.59"
                        },
                        {
                            "id_product": "4",
                            "quantity": "2",
                            "price_product": "29.59"
                        }
                    ]
                    
                )
                .set('Authorization', validToken)
                .expect(201);

        })
    })

    describe('allOrders', () => {

        test('caso sucesso é do tipo function.', () => {
            expect(typeof orderController.allOrders).toBe('function')
        });

        test('sucesso caso existam orders', async () => {
            await supertest(app)
                .get('/orders')
                .set('Authorization', validToken)
                .expect(200);

        })
    })

})