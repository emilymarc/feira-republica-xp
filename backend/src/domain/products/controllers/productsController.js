const { Products } = require("../models/index");
const { Shops } = require("../../shops/models");
const { Categories } = require("../../categories/models");

module.exports = {
  async list(req, res) {
    try {
      const products = await Products.findAll({
        include: [
          {
            model: Shops,
            attributes: ["name", "email", "createdAt", "data_status"],
          },
          {
            model: Categories,
            attributes: ["name", "createdAt", "data_status"],
          },
        ],
        where: {
          data_status: 1,
        },
      });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async findOne(req, res) {
    const { code_product } = req.params;
    try {
      const product = await Products.findOne({
        include: [
          {
            model: Shops,
            attributes: ["name", "email", "createdAt", "data_status"],
          },
        ],
        where: {
          code_product,
          data_status: 1,
        },
      });

      if (!product) {
        res.status(400).json("Product not found!");
      }

      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async create(req, res) {
    try {
      const {
        id_shoop_product,
        id_category_product,
        name,
        description,
        stock_product,
        price,
        data_status,
      } = req.body;

      if (data_status != 1) {
        return res.status(400).json("Data_status invalid");
      }

      const newProduct = await Products.create({
        id_shoop_product,
        id_category_product,
        name,
        description,
        stock_product,
        price,
        data_status,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async edit(req, res) {
    try {
      const { code_product } = req.params;

      const productExist = await Products.count({
        where: {
          code_product,
          data_status: 1,
        },
      });

      if (!productExist) {
        return res.status(400).json("Product not found!");
      }

      const {
        id_shoop_product,
        id_category_product,
        name,
        description,
        stock_product,
        price,
      } = req.body;

      const updatedProduct = await Products.update(
        {
          id_shoop_product,
          id_category_product,
          name,
          description,
          stock_product,
          price,
        },
        {
          where: { code_product, data_status: 1 },
        }
      );

      res.status(201).json("Product updated!");
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async remove(req, res) {
    try {
      const { code_product } = req.params;

      const productExist = await Products.count({
        where: {
          code_product,
          data_status: 1,
        },
      });

      if (!productExist) {
        return res.status(400).json("Product not found!");
      }

      const removedProduct = await Products.update({
        data_status: 0
      },{
        where: { 
          code_product,
          data_status: 1, },
      });

      res.status(201).json("Product removed!");
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
};
