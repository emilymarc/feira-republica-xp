const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    id_shoop_product: Joi.number().integer().required(),
    id_category_product: Joi.number().integer(),
    id_image_product: Joi.number().integer(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    stock_product: Joi.number().integer().required(),
    price: Joi.number().required(),
    data_status: Joi.number().integer(),
  }),
})