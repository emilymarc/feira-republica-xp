const ProductsService = require("../services/productsService");

const ProductsController = {
  async list(req, res) {
    try {
      const products = await ProductsService.getAll(req)

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findOne(req, res) {
    try {
      const products = await ProductsService.findOne(req)

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findByCategory(req, res) {
    try {
      const products = await ProductsService.findByCategory(req)

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

}

module.exports = ProductsController;