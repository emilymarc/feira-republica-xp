const orderService = require("../services");

const orderController = {
  async createOrder(req, res) {
    try {
      const newOrder = await orderService.registerOrder(req.params);
      if (newOrder) {
        const createdOrder = await orderService.registerItemsOrder(req.body, newOrder);

        return res.status(201).send(createdOrder);
      }

    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async allOrders(req, res) {
    try {
      const FindedOrders = await orderService.findAllOrders();
      return res.status(200).json(FindedOrders);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async clientOrders(req, res) {
    try {
      const allOrdersClient = await orderService.findAllOrdersClient(req.params);
      return res.status(200).json(allOrdersClient);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async detailOrder(req, res) {
    try {
      const detailOrderClient = await orderService.findOrderDetail(req.params);
      return res.status(200).json(detailOrderClient);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

module.exports = orderController;