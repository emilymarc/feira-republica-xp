const ExhibitorsController = require('../domain/shops/controllers/Exhibitors.controller');
const productsController = require("../domain/products/controllers/productsController");
const categoriesController = require("../domain/categories/controllers/categoriesController");
const imagesProductsController = require("../domain/imagesProducts/controllers/imagesProductsController");
const createProductValidation = require("../domain/products/validations/createProductValidation");
const editProductValidation = require("../domain/products/validations/editProductValidation");
const orderController = require("../domain/orders/controllers/orders.controller");
const Product = require("../domain/products/models")
const express = require("express");
const routes = express.Router();


// routes.get("/login/shops", products.create);
// routes.get("/login/clients", products.create);

routes.get("/exhibitors", ExhibitorsController.getAllExhibitors);
routes.get("/exhibitors/:idExhibitors", ExhibitorsController.getOneExhibitor);
// routes.get("/shops/:idShops/products", shops.create); 
routes.post("/exhibitors", ExhibitorsController.createExhibitor);
routes.put("/exhibitors/:idExhibitors",  ExhibitorsController.updateExhibitor);
routes.delete("/exhibitors/:idExhibitors/deletar",  ExhibitorsController.deleteExhibitor);


routes.get("/products", productsController.list);
routes.get("/products/find", productsController.find);
routes.get("/products/categories", productsController.findByCategory);
routes.post("/products", createProductValidation, productsController.create);
routes.get("/products/:code_product",  editProductValidation, productsController.findOne);
routes.put("/products/:code_product",  editProductValidation, productsController.edit);
routes.put("/products/:code_product/remove", editProductValidation, productsController.remove);


//CATEGORIES
routes.get("/categories", categoriesController.list);
routes.post("/categories", categoriesController.create);
// routes.get("/products/category/:nameCategory", products.create);


//IMAGES PRODUCTS
routes.get("/images", imagesProductsController.list);
routes.post("/images", imagesProductsController.create);
routes.put("/images/:id_img/remove", imagesProductsController.remove);


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