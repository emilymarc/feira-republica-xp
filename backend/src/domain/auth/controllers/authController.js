const Clients = require("../../clients/models/clients");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");
        
const AuthController = {
	async login(req, res){
        try{
            const { email, password } = req.body;
            const clientsLogged = await Clients.findOne({
                where:
                    {
                        email:email,
                        data_status: 1
                    }
            });

            if (clientsLogged == null) {
                return res.status(400).json({ message: "Customer not found" });
            }

		    if(!clientsLogged || !bcrypt.compareSync(password, clientsLogged.password)) {
			    return res.status(404).json("Invalid email or password");
		    };

            const token = jwt.sign({ 
                id: clientsLogged.id_client, 
                name: clientsLogged.name,
                email: clientsLogged.email,
                }, secret.key);

            return res.json(token);
        }
        catch(error){
            console.error(error);
            return res.status(500).json("error when executing login");
	   }
    }
};

module.exports = AuthController;