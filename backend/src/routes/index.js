const ExhibitorsController = require('../domain/shops/controllers/Exhibitors.controller');
const orderController = require("../domain/orders/controllers/orders.controller");
const express = require("express");
const routes = express.Router();


// routes.get("/login/shops", products.create);
// routes.get("/login/clients", products.create);

routes.get("/exhibitors", ExhibitorsController.getAllExhibitors);
routes.get("/exhibitors/:idExhibitors", ExhibitorsController.getOneExhibitor);
// routes.get("/shops/:idShops/products", shops.create); 
routes.post("/exhibitors", ExhibitorsController.createExhibitor);
routes.put("/exhibitors/:idExhibitors",  ExhibitorsController.updateExhibitor);
routes.put("/exhibitors/:idExhibitors/deletar",  ExhibitorsController.deleteExhibitor);

// routes.get("/products", products.create);
// routes.get("/products/category/:nameCategory", products.create);
// routes.get("/products/:idProduct", products.create);
// routes.post("/products", products.create);
// routes.put("/products/:idProduct", products.create);
// routes.delete("/products/:idProduct", products.create);v

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