const { Op } = require("sequelize");
const { Shops } = require("../models");
const bcrypt = require("bcryptjs");


const ShopsService = {
    async getAll(req) {

        const { termo = 1, page = 1, limit = 6 } = req.query;
        const offset = parseInt(limit) * (parseInt(page) - 1);

        let filter = {
            limit: parseInt(limit),
            offset
        }

        if (termo) {
            Object.assign(filter, {
                where: {
                    data_status: { [Op.substring]: termo }
                }
            })
        }

        const getShops = await Shops.findAll(filter);
        return getShops;
    },


    async getOne(req, res) {

        const { idShops } = req.params;
        const shop = await Shops.findOne({
            where: {
                id_shop: idShops,
                data_status: 1
            }
        })

        if (!shop) {
            res.status(404).json('Shop não encontrado')
        } else {
            return shop
        }
    },

    async create(data) {
        // const file = req.files[0];
        // const uploadPath = await cloudinary.upload(file.path, 'Chefão');

        const { password } = data;
        const newPassword = bcrypt.hashSync(password, 10);
        // console.log(uploadPath);

        const createShop = await Shops.create({
            ...data,
            data_status: 1,
            password: newPassword,
            // Forma de upload na aplicação
            // image: imageFolder + file.filename
            // image: uploadPath.imageUrl
        });
        return createShop
    },

    async update(data, params, res) {
        const { idShops } = params;
        const { password } = data;
        const payloadUpdate = {};

        Object.assign(payloadUpdate, data);

        if (password) {
            const newPassword = bcrypt.hashSync(password, 10);
            Object.assign(payloadUpdate, { password: newPassword });
        }

        await Shops.update({
            ...payloadUpdate,
            data_status: 1
        }, {
            where: { id_shop: idShops },
        });

        const user = await Shops.findByPk(idShops);

        if (!user) {
            res.json('Shop não encontrado');
        } else {

            return user;
        }

    },



    async exclude(params, res) {
        const { idShops } = params;
        const payloadUpdate = {};

        Object.assign(payloadUpdate);

        await Shops.update({
            data_status: 0
        }, {
            where: { id_shop: idShops },
        });

        const user = await Shops.findByPk(idShops);
        if (!user) {
            res.json('Shop não encontrado');
        } else {

            res.json('Shop deletado');
        }
    }
}

module.exports = ShopsService;