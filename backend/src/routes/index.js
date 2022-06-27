const ShopsController = require('../domain/shops/controllers/shops.controller');
const express = require("express");
const routes = express.Router();

// routes.get("/login/shops", products.create);
// routes.get("/login/clients", products.create);

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

// routes.get("/orders", orders.create);
// routes.get("/orders/:idClient", controlerss.create);
// routes.get("/orders/:idClient/:idOrder", controlerss.create);
// routes.post("/orders/:idClient", orders.create);
// routes.put("/orders/:idClient/:idOrder", orders.create);
// routes.delete("/orders/:idClient/:idOrder", orders.create);


module.exports = routes;