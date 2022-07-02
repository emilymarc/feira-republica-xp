const {
    Products, Exhibitors, Categories
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
            where: {
                data_status: 1,
            }
        })


        const getShops = await Products.findAll(filter);
        return getShops;
    },

    async findOne(req) {
        const { code_product } = req.params;

        const product = await Products.findOne({
            include: [
                {
                    model: Exhibitors,
                    attributes: ["name", "email", "createdAt", "data_status"],
                },
                
            ],
            where: {
                code_product,
                data_status: 1,
            },
        });

        if (!product) {
            return json("Product not found!");
        }

        return product
    },

    async findByCategory(req) {
        const { id_product_category } = req.query;

        // const categoryExist = await Categories.count({
        //     where: {
        //         id_category: id_product_category,
        //         data_status: 1
        //     },
        // });

        // if (!categoryExist) {
        //     return res.status(200).json("Category not found!");
        // }

        const products = await Products.findAll({
            include: [
                {
                    model: Categories,
                    attributes: ["name", "createdAt", "data_status"],
                },
                {
                    model: Exhibitors,
                    attributes: ["name", "email", "createdAt", "data_status"],
                },
                // {
                //     model: ImagesProducts,
                //     attributes: [
                //         "url_img",
                //         "id_product_img",
                //         "createdAt",
                //         "data_status",
                //     ],
                // },
            ],
            where: {
                id_product_category,
                data_status: 1,
            },
        });

        return products;
    },


}

module.exports = ProductsService;