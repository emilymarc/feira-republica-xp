const ShopsService = require("../services/ShopsService");



const ShopsController = {

    async getAllShops(req, res) {
        try {
            const getShops = await ShopsService.getAll(req)
            res.status(200).json(getShops);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getOneShop(req, res) {
        try {
            const getShops = await ShopsService.getOne(req, res)
            return res.status(200).json(getShops);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async createShop(req, res) {
        try {
            const createShops = await ShopsService.create(req.body)
            res.status(201).json(createShops);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async updateShop(req, res) {
        try {
            const updateShops = await ShopsService.update(req.body, req.params, res)
            res.status(201).json(updateShops);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteShop(req, res) {
        try {
            const shopDelete = await ShopsService.exclude(req.params, res);
            res.status(201).json(shopDelete);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = ShopsController;