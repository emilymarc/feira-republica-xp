const ShopsController = require('../domain/shops/controllers/shops.controller');
const orderController = require("../domain/orders/controllers/orders.controller");
const AuthController = require("../domain/clients/controllers/authController");
const loginValidation = require("../domain/clients/validations/loginValidation"); 
const loginauthentication = require("../middlewares/authenticator");
const authenticator = require('../middlewares/authenticator');

const express = require("express");
const routes = express.Router();

//routes.get("/login/shops", products.create);
routes.get("/login/clients", loginValidation, authenticator , AuthController.login);

routes.get("/shops", ShopsController.getAllShops);
routes.get("/shops/:idShops", ShopsController.getOneShop);
// routes.get("/shops/:idShops/products", shops.create); 
routes.post("/shops", ShopsController.createShop);
routes.put("/shops/:idShops", ShopsController.updateShop);
routes.put("/shops/:idShops/deletar", ShopsController.deleteShop);

// routes.get("/products", products.create);
// routes.get("/products/category/:nameCategory", products.create);
// routes.get("/products/:idProduct", products.create);
// routes.post("/products", products.create);
// routes.put("/products/:idProduct", products.create);
// routes.delete("/products/:idProduct", products.create);

// routes.get("/clients", clients.create);
// routes.get("/clients/:id", clients.create);
// routes.post("/clients", clients.create);
// routes.put("/clients/:id", clients.create);
// routes.delete("/clients/:id", clients.create);

routes.get("/orders", orderController.allOrders);
routes.get("/orders/:idClient", orderController.clientOrders);
routes.get("/orders/:idClient/:idOrder", orderController.detailOrder);
routes.post("/orders/:idClient", orderController.createOrder);
routes.put("/orders/:idClient/:idOrder", orderController.updateOrder);
routes.delete("/orders/:idClient/:idOrder", orderController.cancelOrder);


module.exports = routes;