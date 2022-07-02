const { Categories } = require("../models/index");
const { ImagesProducts } = require("../../imagesProducts/models");

module.exports = {
  async list(req, res) {
    try {
      const images = await ImagesProducts.findAll({
        where: {
          data_status: 1,
        },
      });

      res.status(201).json(images);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async create(req, res) {
    try {
      const { id_product_img, url_img, data_status } = req.body;

      if (data_status != 1) {
        return res.status(400).json("Data_status inválido");
      }

      const newCategory = await ImagesProducts.create({
        id_product_img,
        url_img,
        data_status,
      });

      res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },

  async remove(req, res) {
    try {
      const { id_img } = req.params;

      const imageExist = await ImagesProducts.count({
        where: {
          id_img,
          data_status: 1,
        },
      });

      if (!imageExist) {
        return res.status(400).json("Image not found!");
      }

      const removedImage = await ImagesProducts.update({
        data_status: 0
      },{
        where: { 
          id_img,
          data_status: 1, },
      });

      res.status(201).json("Image removed!");
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
};
