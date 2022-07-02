const { validate, Joi } = require('express-validation');

const createExhibitorsValidation = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    img: Joi.string()
  }),
});


module.exports = create;