const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    categoryName: Joi.string().required(),
  })
})