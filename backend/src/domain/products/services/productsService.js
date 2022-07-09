const {
    Products,
    Exhibitors,
    Categories,
    ImagesProducts
} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const cloudinary = require('../../../config/cloudinary');


const ProductsService = {

    async getAll(req) {

        const {
            page = 1, limit = 100
        } = req.query;
        const offset = parseInt(limit) * (parseInt(page) - 1);

        let filter = {
            limit: parseInt(limit),
            offset,
        }


        Object.assign(filter, {
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
            where: {
                data_status: 1,
            }
        })


        const getShops = await Products.findAll(filter);
        return getShops;
    },

    async findOne(params) {
        const {
            code_product
        } = params;

        const product = await Products.findOne({
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
        const {
            categoryName
        } = params;

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
            include: [{
                    model: Categories,
                    attributes: ["name"],
                    where: {
                        name: categoryName,
                    },
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
            where: {
                data_status: 1,
            },
        });

        return products;
    },

    async findTerm(params) {
        const {
            term
        } = params;

        const search = await Products.findAll({
            where: {
                name: {
                    [Op.like]: "%" + term + "%"
                },
                data_status: 1,
            },

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
        });

        return search

    },

    async registerProduct(data, params, files) {
        const {
            idExhibitors
        } = params;
        const {
            name,
            description,
            characteristics,
            materials,
            observations,
            stock_product,
            price,
            category,
        } = data;

        const ImagesUrl = await this.registerImagesClaudinary(files, [])

        let responseProduct = {
            code_product: 0,
            id_exhibitors_product: 0,
            name: "",
            description: "",
            characteristics: "",
            materials: "",
            observations: "",
            stock_product: 0,
            price: 0,
            createdAt: 0,
            updatedAt: 0,
            data_status: 0,
            category: {},
            imgs: {}
        };

        const newProduct = await Products.create({
            id_exhibitors_product: idExhibitors,
            name,
            description,
            characteristics,
            materials,
            observations,
            stock_product,
            price,
            data_status: 1
        });

        if (!newProduct) {
            return
        }

        responseProduct.code_product = newProduct.dataValues.code_product;
        responseProduct.id_exhibitors_product = newProduct.dataValues.id_exhibitors_product;
        responseProduct.name = newProduct.dataValues.name;
        responseProduct.description = newProduct.dataValues.description;
        responseProduct.characteristics = newProduct.dataValues.characteristics;
        responseProduct.materials = newProduct.dataValues.materials;
        responseProduct.observations = newProduct.dataValues.observations;
        responseProduct.stock_product = newProduct.dataValues.stock_product;
        responseProduct.price = newProduct.dataValues.price;
        responseProduct.category = category;
        responseProduct.createdAt = newProduct.dataValues.createdAt;
        responseProduct.updatedAt = newProduct.dataValues.updatedAt;
        responseProduct.data_status = newProduct.dataValues.data_status;

        const newResponseProduct = await this.registerCategoryAndImgs(ImagesUrl, responseProduct)

        return newResponseProduct;
    },

    async registerImagesClaudinary(images, arrayUrl) {
        try {
            if (!images) {
                return
            }

            images.forEach(async (item, index) => {
                const urlImage = await cloudinary.uploads(item.path, 'products');

                arrayUrl[index] = await urlImage

            })


            const waitingInsertImages = () => new Promise((resolve, reject) => {
                setTimeout(() => resolve(arrayUrl), 3000)
            })

            const newArrayUrls = await waitingInsertImages().then((res) => {

                return res
            })
            return newArrayUrls

        } catch (error) {
            return
        }

    },

    async registerCategoryAndImgs(images, product) {
        try {
            if (images) {
                images.forEach(async (item, index) => {
                    const newImage = await ImagesProducts.create({
                        id_product_img: product.code_product,
                        url_img: item.imageUrl,
                        data_status: 1
                    });

                    product.imgs[index] = await newImage.dataValues
                })
            }

            product.category = await Categories.create({
                id_product_category: product.code_product,
                name: product.category,
                data_status: 1
            });

            const waitingInsertItems = () => new Promise((resolve, reject) => {
                setTimeout(() => resolve(product), 1500)
            })

            const newResponseProduct = await waitingInsertItems().then((res) => {

                return res
            })
            return newResponseProduct

        } catch (error) {
            return
        }
    },

    async alterProduct(data, params) {
        const {
            code_product
        } = params;

        const productExist = await Products.count({
            where: {
                code_product,
                data_status: 1,
            },
        });

        if (productExist != 1) {
            return
        }

        const updatedProduct = await Products.update({
            ...data
        }, {
            where: {
                code_product,
                data_status: 1
            },
        });

        const alteredProduct = this.findOne(params)

        return alteredProduct
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