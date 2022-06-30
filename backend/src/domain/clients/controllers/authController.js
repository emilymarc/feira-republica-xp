const { Clients } = require("../models/clients");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");

const AuthController = {
	async login(req, res) {
        try{
            const { email, password  } = req.body;
            const clientsLogged = await Clients.findOne({
                where: {
                    email,
                    data_status: 1
                }
            });

		    if (!clientsLogged || !bcrypt.compareSync(password, clientsLogged.password)) {
            console.log(error);
			return res.status(404).json("Invalid email or password");
		    }

            const token = jwt.sign({ id: clientsLogged.id_client, email: clientsLogged.email, name: clientsLogged.name }, secret.key);
            return res.json(token);
        //return res.json("Login successfully");
        }
        catch(error){
            console.error(error);
            return res.status(500).json("error when executing login");
	    }
    }
};

module.exports = AuthController;