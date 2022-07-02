const { Categories } = require("../models/index");
const { Shops } = require("../../shops/models");

module.exports = {
  async list(req, res) {
    try {
      const categories = await Categories.findAll({
      });

      res.status(201).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async create(req, res) {
    try {
      const {
        name,
        data_status
      } = req.body;

      if (data_status != 1) {
        return res.status(400).json("Data_status inválido");
      }

      const newCategory = await Categories.create({
        name,
        data_status
      });

      res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },


};
