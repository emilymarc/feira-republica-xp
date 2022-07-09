import Clients from "../../clients/models/clients";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const AuthController = require("./authController");

const res = {
    status: () => ({json: (val) => JSON.stringify(val)})
};

const req = {
    body: {
        password: 'ljkadslkajsd',
        email: 'teste@email.com'
    }
} 


jest.mock("../../clients/models/clients");
Clients.findOne = async (_) => {
    return Promise.resolve({
        password: req.body.password,
        id_client: '1',
        name: req.body.email,
        email: req.body.email
    })
};


jest.mock("bcryptjs");
bcryptjs.compareSync = (pwd1, pwd2) => {
    return pwd1 === pwd2
}   

describe('Inside the Controller folder, when executing', () => {

    describe('AuthController module', () => {

        test('must have login type function', () => {
            expect(typeof AuthController.login).toBe('function')
        });

        test('must return a valid jwt token', async ()=> {
            const token = await AuthController.login(req, res);
            
            expect(typeof token).toBe('string')

            const decodeToken = jwt.verify(JSON.parse(token), process.env.SECRET_KEY)
            expect(decodeToken.email).toBe(req.body.email)

        })
    })
});