const {
  validate,
  Joi
} = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idClient: Joi.number().required(),
    idOrder: Joi.number().required(),
  }),
});