const supertest = require("supertest");
const jwt = require("jsonwebtoken");
const {
    app
} = require("../../../");
const AuthController = require("./authController");
// const bcryptjs = require("bcryptjs");
//const mockToken = {}
//mockToken.login = jest.fn()
//mockToken.login.mockReturnValue("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6MTEsIm5hbWUiOiJDQW1pIEx1bWEiLCJlbWFpbCI6IkNhbWkuTHVtYUBnbWFpbC5jb20iLCJpYXQiOjE2NTcyMzAwNzV9T7gdRyy4vAgU7wWbFDsCt3lcT3jZIM2gvvPaO6jGJxM")
//const clientToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9jbGllbnQiOjExLCJuYW1lIjoiVG9uaW8gTHVtYSIsImVtYWlsIjoiVG9uaW8uTHVtYUBnbWFpbC5jb20iLCJhZGRyZXNzX2NsaWVudHMiOltdLCJpYXQiOjE2NTcxOTk2NjUsImV4cCI6MzYwMDE2NTcxOTYwNjV9.-SimWUD8LuJo5h3xo3ZH4IZpWYxf350tqxDoI5bEqjU";
//const clientID = 2;

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
                            "email": "Otto_Hane15@yahoo.com",
                            "password": "gululk"
                        }
                    ]  
                ).set('Accept', 'application/json')
            const clientJwt = await jwt.decode(response.token);
            expect("Otto_Hane15@yahoo.com").toBe(clientJwt.email);
        })

    })
})

//-Testar login de idUsuário autorizado 
//– Testar a negação de autorização ao tentar fazer login de um
//idUsuário cadastrado utilizando quatro tentativas com
//diferentes senhas incorretas 
//– Testar a negação de autorização ao tentar fazer login usando
//quatro tentativas com diferentes idUsuário não cadastrados