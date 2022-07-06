const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    code_product: Joi.number().integer().required(),
  }),
  body: Joi.object({
    id_shoop_product: Joi.number().integer(),
    id_category_product: Joi.number().integer(),
    name: Joi.string(),
    description: Joi.string(),
    stock_product: Joi.number().integer(),
    price: Joi.number(),
    data_status: Joi.number().integer(),
  }),
})