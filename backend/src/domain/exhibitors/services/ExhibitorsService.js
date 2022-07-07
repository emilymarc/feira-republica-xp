const { Exhibitors } = require("../models");
const bcrypt = require("bcryptjs");
const { Products, ImagesProducts } = require("../../products/models");


const ExhibitorsService = {
    async getAll(req) {

        const { page = 1, limit = 4 } = req.query;
        const offset = parseInt(limit) * (parseInt(page) - 1);

        let filter = {
            limit: parseInt(limit),
            offset,
            attributes: {
                exclude: ['password', 'data_status']
            }
        }


        Object.assign(filter, {
            where: {
                data_status: 1,
            }
        })


        const getShops = await Exhibitors.findAll(filter);
        return getShops;
    },


    async getOne(req, res) {

        const { idExhibitors } = req.params;
        const exhibitors = await Exhibitors.findOne({
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1,
            },
            attributes: {
                exclude: ['password', 'data_status']
            }

        })

        if (!exhibitors) {
            res.status(404).json('exhibitors não encontrado')
        } else {
            return exhibitors
        }
    },

    async getProducts(req, res) {

        const { idExhibitors } = req.params;
        const exhibitors = await Exhibitors.findOne({
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1,
            },
            attributes: {
                exclude: ['password', 'data_status']
            },
            include: [
                {
                    model: Products,
                    attributes: {
                        exclude: ['data_status']
                    },
                    include: [
                        {
                            model: ImagesProducts,
                            attributes: [
                                "url_img",
                            ],
                        },        
                    ]
                },
                

            ]

        })

        if (!exhibitors) {
            res.status(404).json('exhibitors não encontrado')
        } else {
            return exhibitors
        }
    },

    async create(data) {

        const { name, email, password, img, profession, birth_date, phone, phrase, description } = data;
        const newPassword = bcrypt.hashSync(password, 10);


        const createShop = await Exhibitors.create({
            name,
            profession,
            birth_date,
            phone,
            phrase,
            description,
            email,
            img,
            data_status: 1,
            password: newPassword,
        });
        return createShop
    },

    async update(data, params) {
        const { idExhibitors } = params;
        const { password } = data;
        const payloadUpdate = {};

        Object.assign(payloadUpdate, data);

        if (password) {
            const newPassword = bcrypt.hashSync(password, 10);
            Object.assign(payloadUpdate, { password: newPassword });
        }

        const user = await Exhibitors.count({
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1,
            },

        })

        if (user != 1) {
            return ('Expositor não encontrado');
        }

        await Exhibitors.update({
            ...payloadUpdate,
        }, {
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1
            },
        });

        return ('Expositor atualizado');


    },



    async exclude(params,) {
        const { idExhibitors } = params;

        const exhibitors = await Exhibitors.count({
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1,
            },

        })

        if (exhibitors != 1) {
            return exhibitors
        }


        await Exhibitors.update({
            data_status: 0
        }, {
            where: {
                id_exhibitors: idExhibitors,
                data_status: 1
            },
        });
        return exhibitors
    }
}

module.exports = ExhibitorsService;