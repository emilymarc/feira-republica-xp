const {
  validate,
  Joi
} = require("express-validation");

module.exports = validate({
  params: Joi.object({
    idClient: Joi.number().required(),
    idOrder: Joi.number().required(),
  }),
  body: Joi.object({
    progress: Joi.number().required(),
  }),
});