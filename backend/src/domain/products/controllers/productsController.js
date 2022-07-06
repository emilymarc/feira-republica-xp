const ProductsService = require("../services/productsService");

const ProductsController = {
  async list(req, res) {
    try {
      const products = await ProductsService.getAll(req)

      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findOne(req, res) {
    try {
      const products = await ProductsService.findOne(req.params)
      if(!products){
        return res.status(400).json("Product not found!");
      }
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findByCategory(req, res) {
    try {
      const findProducts = await ProductsService.findByCategory(req.params)
      if(!findProducts){
        return res.status(400).json("Category not found!");
      }
      return res.status(200).json(findProducts);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findByTerm(req, res) {
    try {
      const ProductsByTerm = await ProductsService.findTerm(req.params)
      if(!ProductsByTerm){
        return res.status(400).json("Products not found!");
      }
      return res.status(200).json(ProductsByTerm);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async createProduct(req, res) {
    try {
      const createdProduct = await ProductsService.registerProduct(req.body, req.params, req.files)
      if(!createdProduct){
        return res.status(400).json("idExhibitors diferente do esperado!!");
      }
      return res.status(201).json(createdProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async updateProduct(req, res) {
    try {
      const newProduct = await ProductsService.alterProduct(req.body, req.params)
      if(!newProduct){
        return res.status(400).json("Product not found!");
      }
      return res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async deleteProduct(req, res) {
    try {
      const deletedProduct = await ProductsService.excludeProduct(req.params)

      if(deletedProduct !=1){
        return res.status(404).json("Erro ao encontrar idProduct")
      }

      return res.status(204).json(deletedProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

}

module.exports = ProductsController;