const { validate, Joi } = require('express-validation');

 const updateExhibitorsValidation = validate({
  params: Joi.object({
    idExhibitors: Joi.number().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    profession: Joi.string(),
    birth_date: Joi.date(),
    phone: Joi.string().min(10).max(16),
    phrase: Joi.string(),
    description: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(3),
    img: Joi.string()
  }),
});

module.exports = updateExhibitorsValidation;
