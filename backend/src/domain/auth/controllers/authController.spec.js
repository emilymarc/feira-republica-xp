const supertest = require("supertest");
//const  = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
    app
} = require("../../../");
const AuthController = require("./authController");
const mockToken = {}
mockToken.login = jest.fn()
mockToken.login.mockReturnValue("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6MTEsIm5hbWUiOiJDQW1pIEx1bWEiLCJlbWFpbCI6IkNhbWkuTHVtYUBnbWFpbC5jb20iLCJpYXQiOjE2NTcyMzAwNzV9T7gdRyy4vAgU7wWbFDsCt3lcT3jZIM2gvvPaO6jGJxM")


//mockCurrency.getQuotacaoDolar = jest.fn()
//mockCurrency.getQuotacaoDolar.mockReturnValue(3)

describe('Inside the Controller folder, when executing', () => {

    describe('AuthController module', () => {

        test('must have login type function', () => {
            expect(typeof AuthController.login).toBe('function')
        });

    
        test('Test login Authorized User id', async () => {
            const response = await supertest(app)
                .post(`/login/clients`)
                .send(               
                    [
                        {
                            "id": "11", 
                            "name": "CAmi Luma",
                            "email": "Cami.Luma@gmail.com"
                        }
                    ]  
                )
                .expect(201, mockToken);
        })
    })
})

//-Testar login de idUsuário autorizado 
//– Testar a negação de autorização ao tentar fazer login de um
//idUsuário cadastrado utilizando quatro tentativas com
//diferentes senhas incorretas 
//– Testar a negação de autorização ao tentar fazer login usando
//quatro tentativas com diferentes idUsuário não cadastrados