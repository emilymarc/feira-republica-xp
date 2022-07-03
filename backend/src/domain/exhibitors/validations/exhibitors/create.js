const { validate, Joi } = require('express-validation');

const createExhibitorsValidation = validate({
  body: Joi.object({
    name: Joi.string().required(),
    profession: Joi.string().required(),
    birth_date: Joi.date().required(),
    phone: Joi.string().min(10).max(16).required(),
    phrase: Joi.string(),
    description: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    img: Joi.string()
  }),
});


module.exports = createExhibitorsValidation;