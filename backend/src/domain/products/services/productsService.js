const {
    Products, Exhibitors, Categories, ImagesProducts
} = require("../models");

const ProductsService = {

    async getAll(req) {

        const { page = 1, limit = 4 } = req.query;
        const offset = parseInt(limit) * (parseInt(page) - 1);

        let filter = {
            limit: parseInt(limit),
            offset,
        }


        Object.assign(filter, {
            include: [
                {
                    model: Categories,
                    attributes: ["name"],
                },
                {
                    model: Exhibitors,
                    attributes: ["name", "profession","phrase", "description", "birth_date", "phone", "email" ],
                },
                {
                    model: ImagesProducts,
                    attributes: [
                        "url_img",
                    ],
                },
            ],
            where: {
                data_status: 1,
            }
        })


        const getShops = await Products.findAll(filter);
        return getShops;
    },

    async findOne(params) {
        const { code_product } = params;

        const product = await Products.findOne({
            include: [
                {
                    model: Categories,
                    attributes: ["name"],
                },
                {
                    model: Exhibitors,
                    attributes: ["name", "profession","phrase", "description", "birth_date", "phone", "email" ],
                },
                {
                    model: ImagesProducts,
                    attributes: [
                        "url_img",
                    ],
                },
            ],
            where: {
                code_product,
                data_status: 1,
            },
        });

        if (!product) {
            return;
        }

        return product
    },

    async findByCategory(params) {
        const { categoryName } = params;

        const categoryExist = await Categories.count({
            where: {
                name: categoryName,
                data_status: 1
            },
        });

        if (!categoryExist) {
            return;
        }

        const products = await Products.findAll({
            include: [
                {
                    model: Categories,
                    attributes: ["name"],
                    where: {
                        name: categoryName,
                    },
                },
                {
                    model: Exhibitors,
                    attributes: ["name", "profession","phrase", "description", "birth_date", "phone", "email" ],
                },
                {
                    model: ImagesProducts,
                    attributes: [
                        "url_img",
                    ],
                },
            ],
            where: {
                data_status: 1,
            },
        });

        return products;
    },

    async excludeProduct(params) {
        const {
            code_product,
        } = params;

        const hasProduct = await Products.count({
            where: {
                code_product,
                data_status: 1
            }
        })

        if (hasProduct != 1) {
            return hasProduct
        }

        await Products.update({
            data_status: 0
        }, {
            where: {
                code_product,
                data_status: 1
            }
        });

        await ImagesProducts.update({
            data_status: 0
        }, {
            where: {
                id_product_img: code_product,
                data_status: 1
            }
        });

        await Categories.update({
            data_status: 0
        }, {
            where: {
                id_product_category: code_product,
                data_status: 1
            }
        });
        return hasProduct
    },


}

module.exports = ProductsService;