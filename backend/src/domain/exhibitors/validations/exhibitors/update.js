const { validate, Joi } = require('express-validation');

 const updateExhibitorsValidation = validate({
  params: Joi.object({
    idExhibitors: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    img: Joi.string().required(),
  }),
});

module.exports = update;
