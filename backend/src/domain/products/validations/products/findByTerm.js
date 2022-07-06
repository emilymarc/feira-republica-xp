const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    term: Joi.string().required(),
  })
})