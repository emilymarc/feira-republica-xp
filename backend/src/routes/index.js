const express = require("express");
const routes = express.Router();
const ClientsController = require("../domain/clients/controllers/clientsController");
const clientsCreateValidator = require("../domain/clients/validations/clientsCreateValidator");
const clientsUpdateValidator = require("../domain/clients/validations/clientsUpdateValidator");


// routes.get("/login/shops", products.create); //DELETADO
// routes.get("/login/clients", products.create);

// routes.get("/shops", shops.create);
// routes.get("/shops/:idShops", shops.create);
// routes.get("/shops/:idShops/products", shops.create);
// routes.post("/shops", shops.create);
// routes.put("/shops/:idShops", shops.create);
// routes.delete("/shops/:idShops", shops.create);

// routes.get("/products", products.create);
// routes.get("/products/category/:nameCategory", products.create);
// routes.get("/products/:idProduct", products.create);
// routes.post("/products", products.create);
// routes.put("/products/:idProduct", products.create);
// routes.delete("/products/:idProduct", products.create);

routes.get("/clients",ClientsController.listAllClients);
routes.get("/clients/:id", ClientsController.listClientPerId);
routes.post("/clients", clientsCreateValidator, ClientsController.createClient);
routes.patch("/clients/:id", clientsUpdateValidator, ClientsController.updateClient);
routes.delete("/clients/:id", ClientsController.deleteClient);

// routes.get("/orders", orders.create);
// routes.get("/orders/:idClient", controlerss.create);
// routes.get("/orders/:idClient/:idOrder", controlerss.create);
// routes.post("/orders/:idClient", orders.create);
// routes.put("/orders/:idClient/:idOrder", orders.create);
// routes.delete("/orders/:idClient/:idOrder", orders.create);


module.exports = routes;