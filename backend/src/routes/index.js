const ExhibitorsController = require('../domain/exhibitors/controllers/Exhibitors.controller');
const { createExhibitorsValidation, getOneExhibitorsValidation, destroyExhibitorsValidation, updateExhibitorsValidation } = require('../domain/exhibitors/validations/exhibitors/')

const orderController = require("../domain/orders/controllers/orders.controller");

const express = require("express");
const ProductsController = require('../domain/products/controllers/productsController');
const routes = express.Router();
const ClientsController = require("../domain/clients/controllers/clientsController");
const clientsCreateValidator = require("../domain/clients/validations/clientsCreateValidator");
const clientsUpdateValidator = require("../domain/clients/validations/clientsUpdateValidator");


// routes.get("/login/shops", products.create); //DELETADO
// routes.get("/login/clients", products.create);

routes.get("/exhibitors", ExhibitorsController.getAllExhibitors);
routes.get("/exhibitors/:idExhibitors", getOneExhibitorsValidation, ExhibitorsController.getOneExhibitor);
routes.get("/exhibitors/:idExhibitors/products", getOneExhibitorsValidation, ExhibitorsController.getProductsExhibitor);
routes.post("/exhibitors", createExhibitorsValidation, ExhibitorsController.createExhibitor);
routes.put("/exhibitors/:idExhibitors", updateExhibitorsValidation, ExhibitorsController.updateExhibitor);
routes.delete("/exhibitors/:idExhibitors/deletar", destroyExhibitorsValidation, ExhibitorsController.deleteExhibitor);


routes.get("/products", ProductsController.list);
routes.get("/products/:code_product", ProductsController.findOne);
routes.get("/products/categories/:categoryName", ProductsController.findByCategory);
// routes.post("/products/:idExhibitors", ProductsController.createProduct);
// routes.get("/products/:code_product", editProductValidation, productsController.findOne);
// routes.put("/products/:code_product", editProductValidation, productsController.edit);
routes.delete("/products/:code_product/remove", ProductsController.deleteProduct);


// //CATEGORIES
// routes.get("/categories", categoriesController.list);
// routes.post("/categories", categoriesController.create);
// // routes.get("/products/category/:nameCategory", products.create);


// //IMAGES PRODUCTS
// routes.get("/images", imagesProductsController.list);
// routes.post("/images", imagesProductsController.create);
// routes.put("/images/:id_img/remove", imagesProductsController.remove);


routes.get("/clients",ClientsController.listAllClients);
routes.get("/clients/:id", ClientsController.listClientPerId);
routes.post("/clients", clientsCreateValidator, ClientsController.createClient);
routes.patch("/clients/:id", clientsUpdateValidator, ClientsController.updateClient);
routes.delete("/clients/:id", ClientsController.deleteClient);

routes.get("/orders", orderController.allOrders);
routes.get("/orders/:idClient", orderController.clientOrders);
routes.get("/orders/:idClient/:idOrder", orderController.detailOrder);
routes.post("/orders/:idClient", orderController.createOrder);
routes.put("/orders/:idClient/:idOrder", orderController.updateOrder);
routes.delete("/orders/:idClient/:idOrder", orderController.cancelOrder);


module.exports = routes;