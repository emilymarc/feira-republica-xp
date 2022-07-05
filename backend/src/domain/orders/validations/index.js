const createOrder  = require("./order/createOrder");
const updateOrder = require("./order/updateOrder");
const cancelOrder = require("./order/cancelOrder");
const detailOrder = require("./order/detailOrder");
const clientOrders = require("./order/clientOrders");


const orderValidation = {
  createOrder,
  updateOrder,
  cancelOrder,
  detailOrder,
  clientOrders
  
};


module.exports = orderValidation;

