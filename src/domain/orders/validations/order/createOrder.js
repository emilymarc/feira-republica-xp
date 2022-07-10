const {
  validate,
  Joi
} = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idClient: Joi.number().required(),
  }),
  body: Joi.object({
    zip_cod: Joi.string().required(),
    st: Joi.string().required(),
    house_number: Joi.string().required(),
    district: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    items_order: Joi.array().items({
      id_product: Joi.number().required(),
      quantity: Joi.number().required(),
      price_product: Joi.number().required(),
    })
  })
});