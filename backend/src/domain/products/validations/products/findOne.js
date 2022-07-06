const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    code_product: Joi.number().required(),
  })
})