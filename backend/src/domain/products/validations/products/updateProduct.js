const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    code_product: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    characteristics: Joi.string().required(),
    materials: Joi.string().required(),
    observations: Joi.string().required(),
    stock_product: Joi.number().integer().required(),
    price: Joi.number().required()
  }),
})