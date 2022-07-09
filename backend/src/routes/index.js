
const ClientsController = require('../domain/clients/controllers/clientsController');
const orderController = require("../domain/orders/controllers/orders.controller");
const AuthController = require("../domain/auth/controllers/authController");
const loginValidator = require("../domain/auth/validations/loginValidator"); 
const ExhibitorsController = require('../domain/exhibitors/controllers/Exhibitors.controller');
const { createExhibitorsValidation, getOneExhibitorsValidation, destroyExhibitorsValidation, updateExhibitorsValidation } = require('../domain/exhibitors/validations/exhibitors/');
const orderValidation = require('../domain/orders/validations');

const express = require("express");
const ProductsController = require('../domain/products/controllers/productsController');
const ProductsValidation = require('../domain/products/validations');

const routes = express.Router();
const clientsCreateValidator = require("../domain/clients/validations/clientsCreateValidator");
const clientsUpdateValidator = require("../domain/clients/validations/clientsUpdateValidator");
const Auth = require('../middlewares/auth');

routes.post("/login/clients", loginValidator, AuthController.login);

routes.get("/exhibitors", ExhibitorsController.getAllExhibitors);
routes.get("/exhibitors/:idExhibitors", getOneExhibitorsValidation, ExhibitorsController.getOneExhibitor);
routes.get("/exhibitors/:idExhibitors/products", getOneExhibitorsValidation, ExhibitorsController.getProductsExhibitor);
routes.post("/exhibitors", createExhibitorsValidation, ExhibitorsController.createExhibitor);
routes.put("/exhibitors/:idExhibitors", updateExhibitorsValidation, ExhibitorsController.updateExhibitor);
routes.delete("/exhibitors/:idExhibitors/deletar", destroyExhibitorsValidation, ExhibitorsController.deleteExhibitor);

routes.get("/products", ProductsController.list);
routes.get("/products/:code_product", ProductsValidation.findOne, ProductsController.findOne);
routes.get("/products/categories/:categoryName", ProductsValidation.findByCategory, ProductsController.findByCategory);
routes.get("/products/search/:term", ProductsValidation.findByTerm, ProductsController.findByTerm);
routes.post("/products/:idExhibitors", ProductsValidation.createProduct, ProductsController.createProduct);
routes.put("/products/:code_product", ProductsValidation.updateProduct, ProductsController.updateProduct);
routes.delete("/products/:code_product/remove", ProductsValidation.deleteProduct, ProductsController.deleteProduct);

routes.get("/clients", Auth, ClientsController.listAllClients);
routes.get("/clients/:id_client", Auth, ClientsController.listClientPerId);
routes.post("/clients", clientsCreateValidator, ClientsController.createClient);
routes.patch("/clients/:id_client", Auth, clientsUpdateValidator, ClientsController.updateClient);
routes.delete("/clients/:id_client", Auth, ClientsController.deleteClient);

routes.get("/orders", Auth, orderController.allOrders);
routes.get("/orders/:idClient", Auth, orderValidation.clientOrders, orderController.clientOrders);
routes.get("/orders/:idClient/:idOrder", Auth, orderValidation.detailOrder, orderController.detailOrder);
routes.post("/orders/:idClient", Auth, orderValidation.createOrder, orderController.createOrder);
routes.patch("/orders/:idClient/:idOrder", Auth, orderValidation.updateOrder, orderController.updateOrder);
routes.delete("/orders/:idClient/:idOrder", Auth, orderValidation.cancelOrder, orderController.cancelOrder);


module.exports = routes;