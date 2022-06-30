const bcrypt = require("bcryptjs");
const { Clients } = require("../models/clients")

const ClientsController = {

    async createClient(req, res) {
        try {
          
            const { name, email, password, img } = req.body;
          
            const newPass = bcrypt.hashSync(password, 10);
            
            const newUser = await Clients.create({
                name,
                email,
                password: newPass,
                img,
                data_status: 1
            });

            return res.status(201).json(newUser);
        
        } catch (error) {
            res.status(400).json("Erro ao criar usuário");
        }
    },

    async listClientPerId(req, res) {
        const { id_client: id_client } = req.params;
    
        try {

            const clientPerId = await Clients.findOne({ 
                where: { 
                    id_client
                },
                attributes: { exclude: "password" }
            });
    
            console.log(clientPerId, id_client);
            
            if (!clientPerId) {
                return res.status(200).json("Nenhum usuário cadastrado com essas informações!");
            }

            return res.status(200).json(allUsers);
            
        } catch (error) {
            console.log(error);

            return res.status(400).json("Ocorreu um erro ao listar o usuario desejado");
        }
    },

    async listAllClients(req, res) {
        try {

            const allClients = await Clients.findAll({ 
                attributes: { exclude: "password" }
            });
    
            console.log(allClients);
            
            if (!allClients) {
                return res.status(200).json("Nenhum usuário cadastrado!");
            }

            return res.status(200).json(allClients);
            
        } catch (error) {
            console.log(error);

            return res.status(400).json("Ocorreu um erro ao listar os usuarios");
        }
    },

    async updateClient(req, res) {
        const { id_client: id_client } = req.params;
        const clientToUpdate = await Clients.findOne({ 
            where: { 
                id_client,
                data_status: 1
            } 
        });
        console.log(clientToUpdate, id_client);
    
        try {
          
            if (clientToUpdate == null) {
                return res.status(400).json({ message: "Usuário não encontrado" })
            }

            const query = {};

            if (req.body.password != null) {
                const newpassword = bcrypt.hashSync(req.body.password, 10);
                query.password = newpassword;
            }

            if (req.body.name != null) {
                query.name = req.body.name;
            }

            if (req.body.email != null) {
                query.email = req.body.email;
            }

            if (req.body.img != null) {
                query.img = req.body.img;
            }

            const updatedClient = await Users.update(
                query, 
                {where: {
                    id_client,
                    data_status: 1
                    }
                }
            );

            return res.status(200).json({...clientToUpdate, ...query});

        } catch (error) {
            console.log(error);
            res.status(400).json("Não foi possivel atualizar os dados do usuário");
        }
      },
    
    async deleteClient(req, res) {
        try {
            const { id_client } = req.params;
            const deleteClientPerId = await Clients.findOne({
                where: {
                    data_status: 1,
                    id_client: id_client
                }
            });
    
            if (id_client) {
                await Clients.update(
                    { data_status: 0 }, 
                    { where: { 
                            id_client: id_client 
                        }
                    }
                );
        
                return res.status(204).json("Usuario deletado: ", deleteClientPerId);
            }
    
            res.status(404).json("usuario não encontrado!");

        } catch (error) {
            return res.status(500).json("Erro ao tentar deletar usuario!");
        }
    }
}

module.exports = ClientsController

