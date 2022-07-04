const ExhibitorsService = require("../services/ExhibitorsService");



const ExhibitorsController = {

    async getAllExhibitors(req, res) {
        try {
            const getExhibitors = await ExhibitorsService.getAll(req)
            res.status(200).json(getExhibitors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getOneExhibitor(req, res) {
        try {
            const getExhibitors = await ExhibitorsService.getOne(req, res)
            return res.status(200).json(getExhibitors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getProductsExhibitor(req, res) {
        try {
            const getExhibitorsProducts = await ExhibitorsService.getProducts(req, res)
            return res.status(200).json(getExhibitorsProducts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async createExhibitor(req, res) {
        try {
            const createExhibitors = await ExhibitorsService.create(req.body)
            res.status(201).json(createExhibitors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async updateExhibitor(req, res) {
        try {
            const updateExhibitors = await ExhibitorsService.update(req.body, req.params, res)
            return res.status(201).json(updateExhibitors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteExhibitor(req, res) {
        try {
            const deleteExhibitors = await ExhibitorsService.exclude(req.params);

            if (deleteExhibitors != 1) {
                return res.status(404).json('Expositor não encontrado');
            }
            return res.status(204).json(deleteExhibitors);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = ExhibitorsController;