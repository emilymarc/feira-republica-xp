const {
    Orders,
    ItemOrder
} = require("../models");

class OrderService {

    async registerOrder(params) {
        const {
            idClient
        } = params;

        let responseOrder = {

            order: 0,
            id_client_order: 0,
            progress: 0,
            price_gross: 0,
            discount: 0,
            shipping_total: 0,
            price_order_total: 0,
            updatedAt: 0,
            createdAt: 0,
            data_status: 0,
            items_order: {}
        };

        const registeredOrder = await Orders.create({
            id_client_order: idClient,
            progress: 1,
            data_status: 1,
        });

        responseOrder.order = registeredOrder.dataValues.order;
        responseOrder.id_client_order = registeredOrder.dataValues.id_client_order;
        responseOrder.data_status = registeredOrder.dataValues.data_status;
        responseOrder.progress = registeredOrder.dataValues.progress;
        responseOrder.updatedAt = registeredOrder.dataValues.updatedAt;
        responseOrder.createdAt = registeredOrder.dataValues.createdAt;

        return responseOrder;
    }

    async registerItemsOrder(data, order) {
        data.forEach(async (item, index) => {
            const OrderItem = await ItemOrder.create({
                id_order_item_order: order.order,
                id_product_item_order: parseInt(item.id_product),
                quantity: parseInt(item.quantity),
                price_unity: parseFloat(item.price_product).toFixed(2),
                shipping: 20.00,
                price_total: (item.price_product * item.quantity),
                data_status: 1
            });

            order.shipping_total += await (OrderItem.dataValues.shipping * OrderItem.dataValues.quantity)
            order.price_gross += await (OrderItem.dataValues.price_total)
            order.price_order_total += await (OrderItem.dataValues.price_total) + (OrderItem.dataValues.shipping * OrderItem.dataValues.quantity)
            order.items_order[index] = await OrderItem.dataValues
        })

        const cincoMil = () => new Promise((resolve, reject) => {
            setTimeout(() => resolve(order), 5000)
        })

        const newOrder = await cincoMil().then((res) => {
            Orders.update({
                ...res,
            }, {
                where: {
                    order: res.order,
                    data_status: 1
                },
            });
            return res
        })
        return newOrder
    }

    async findAllOrders() {
        const fullOrders = await Orders.findAll({
            where: {
                data_status: 1
            }
        });
        return fullOrders;
    }

    async findAllOrdersClient(params) {
        const {
            idClient
        } = params

        const fullOrdersClient = await Orders.findAll({
            where: {
                id_client_order: idClient
            }
        });
        return fullOrdersClient;
    }

    async findOrderDetail(params) {
        const {
            idClient,
            idOrder
        } = params

        let responseOrder = {
            order: 0,
            id_client_order: 0,
            progress: 0,
            price_gross: 0,
            discount: 0,
            shipping_total: 0,
            price_order_total: 0,
            updatedAt: 0,
            createdAt: 0,
            data_status: 0,
            items_order: {}
        };

        const OrdersClient = await Orders.findOne({
            where: {
                order: idOrder,
                id_client_order: idClient
            }
        });

        responseOrder.items_order = await ItemOrder.findAll({
            where: {
                id_order_item_order: idOrder
            }
        });

        responseOrder.order = OrdersClient.dataValues.order;
        responseOrder.id_client_order = OrdersClient.dataValues.id_client_order;
        responseOrder.data_status = OrdersClient.dataValues.data_status;
        responseOrder.progress = OrdersClient.dataValues.progress;
        responseOrder.price_gross = OrdersClient.dataValues.updatedAt;
        responseOrder.discount = OrdersClient.dataValues.updatedAt;
        responseOrder.shipping_total = OrdersClient.dataValues.updatedAt;
        responseOrder.price_order_total = OrdersClient.dataValues.updatedAt;
        responseOrder.updatedAt = OrdersClient.dataValues.updatedAt;
        responseOrder.createdAt = OrdersClient.dataValues.createdAt;

        return responseOrder;
    }

    async alterOrder(data, params) {
        const {
            idClient,
            idOrder
        } = params;

        const {
            progress
        } = data;

        const tryModifyOrder = await Orders.update({
            progress
        }, {
            where: {
                order: idOrder,
                id_client_order: idClient,
                data_status: 1
            }
        });

        if (tryModifyOrder != 1) {
            return
        }

        const modifyOrder = await Orders.findOne({
            where: {
                order: idOrder,
                id_client_order: idClient
            }
        });

        return modifyOrder;
    }

    async excludeOrder(params) {
        const {
            idClient,
            idOrder
        } = params;

        const hasOrder = await Orders.count({
            where: {
                order: idOrder,
                id_client_order: idClient
            },
        });

        if (hasOrder != 1) {
            return
        }

        const tryDeleteOrder = await Orders.update({
            data_status: 0
        }, {
            where: {
                order: idOrder,
                id_client_order: idClient,
                data_status: 1
            }
        });

        const tryDeleteItemsOrder = await ItemOrder.update({
            data_status: 0
        }, {
            where: {
                id_order_item_order: idOrder,
                data_status: 1
            }
        });
        return tryDeleteOrder
    }
}

module.exports = OrderService;