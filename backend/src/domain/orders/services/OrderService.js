const {
    Orders,
    ItemOrder,
    Products,
    ImagesProducts,
    Exhibitors,
    Categories,
} = require("../models");
const {
    Clients,
    Address
} = require("../../clients/models");


class OrderService {

    async registerOrder(data, params) {
        const {
            idClient
        } = params;
        const {
            zip_cod,
            st,
            house_number,
            district,
            city,
            state
        } = data;

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

        const hasClient = await Clients.count({
            where: {
                id_client: idClient,
                data_status: 1
            },
        });

        if (hasClient != 1) {
            return
        }

        const registeredOrder = await Orders.create({
            id_client_order: idClient,
            progress: 1,
            zip_cod,
            st,
            house_number,
            district,
            city,
            state,
            data_status: 1,
        });

        if (!registeredOrder) {
            return
        }
        responseOrder.order = registeredOrder.dataValues.order;
        responseOrder.id_client_order = registeredOrder.dataValues.id_client_order;
        responseOrder.data_status = registeredOrder.dataValues.data_status;
        responseOrder.progress = registeredOrder.dataValues.progress;
        responseOrder.updatedAt = registeredOrder.dataValues.updatedAt;
        responseOrder.createdAt = registeredOrder.dataValues.createdAt;

        const newResponseOrder = await this.registerItemsOrder(data.items_order, responseOrder)

        return newResponseOrder;
    }

    async registerItemsOrder(data, order) {
        data.forEach(async (item, index) => {
            const OrderItem = await ItemOrder.create({
                id_order_item_order: order.order,
                id_product_item_order: parseInt(item.id_product),
                quantity: parseInt(item.quantity),
                price_unity: parseFloat(item.price_product).toFixed(2),
                shipping: 0,
                price_total: (item.price_product * item.quantity),
                data_status: 1
            });

            order.shipping_total += await (OrderItem.dataValues.shipping * OrderItem.dataValues.quantity)
            order.price_gross += await (OrderItem.dataValues.price_total)
            order.price_order_total += await (OrderItem.dataValues.price_total) + (OrderItem.dataValues.shipping * OrderItem.dataValues.quantity)
            order.items_order[index] = await OrderItem.dataValues
        })

        const waitingInsertItems = () => new Promise((resolve, reject) => {
            setTimeout(() => resolve(order), 2000)
        })

        const newOrder = await waitingInsertItems().then(async (res) => {
            await Orders.update({
                ...res,
            }, {
                where: {
                    order: res.order,
                    data_status: 1
                },
            });

            const updatedOrder = await Orders.findOne({
                include: {
                    model: ItemOrder,
                },
                where: {
                    order: res.order,
                    data_status: 1
                },
            });

            return updatedOrder
        })
        return newOrder
    }

    async findAllOrders() {
        const fullOrders = await Orders.findAll({
            include: {
                model: ItemOrder,
            },
            where: {
                data_status: 1
            },
        });
        return fullOrders;
    }

    async findAllOrdersClient(params) {
        const {
            idClient
        } = params

        const hasClient = await Clients.count({
            where: {
                id_client: idClient,
                data_status: 1
            },
        });

        if (hasClient != 1) {
            return
        }

        const fullOrdersClient = await Orders.findAll({
            include: [{
                model: ItemOrder
            }, ],
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

        const hasClient = await Clients.count({
            where: {
                id_client: idClient,
                data_status: 1
            },
        });

        const hasOrder = await Orders.count({
            where: {
                order: idOrder,
                data_status: 1
            },
        });

        if (hasClient != 1 || hasOrder != 1) {
            return
        }

        const OrdersClient = await Orders.findOne({
            include: [{
                model: ItemOrder,
                include: [{
                    model: Products,
                    include: [{
                        model: Categories,
                        attributes: ["name"],
                    },
                    {
                        model: Exhibitors,
                        attributes: ["name", "profession", "phrase", "description", "birth_date", "phone", "email"],
                    },
                    {
                        model: ImagesProducts,
                        attributes: [
                            "url_img",
                        ],
                    },
                ],
                }, ],
            }, ],
            where: {
                order: idOrder,
                id_client_order: idClient
            }
        });

        return OrdersClient;
    }

    async alterOrder(data, params) {
        const {
            idClient,
            idOrder
        } = params;

        const {
            progress
        } = data;

        const hasClient = await Clients.count({
            where: {
                id_client: idClient,
                data_status: 1
            },
        });

        const hasOrder = await Orders.count({
            where: {
                order: idOrder,
                data_status: 1
            },
        });

        if (hasClient != 1 || hasOrder != 1) {
            return
        }

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
            include: [{
                model: ItemOrder,
            }, ],
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

        const hasClient = await Clients.count({
            where: {
                id_client: idClient,
                data_status: 1
            },
        });

        const hasOrder = await Orders.count({
            where: {
                order: idOrder,
                data_status: 1
            },
        });

        if (hasClient != 1 || hasOrder != 1) {
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