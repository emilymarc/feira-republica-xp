const orderService = require("../services");

const orderController = {
  async createOrder(req, res) {
    try {
      const newOrder = await orderService.registerOrder(req.params);
      if (newOrder) {
        // await console.log(newOrder);
        const newItemsOrder = await orderService.registerItemsOrder(req.body,newOrder);

        return res.status(201).send(newItemsOrder);
      }

    } catch (error) {

      return res.status(500).json(error);
      // return res.send(error);
    }
  },
};

module.exports = orderController;