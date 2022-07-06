const {
  validate,
  Joi
} = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idClient: Joi.number().required(),
  }),
  body: Joi.array().items({
    id_product: Joi.number().required(),
    quantity: Joi.number().required(),
    price_product: Joi.number().required(),
  })
});