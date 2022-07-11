const { validate, Joi } = require('express-validation');

const destroyExhibitorsValidation = validate({
  params: Joi.object({
    idExhibitors: Joi.number().required(),
  }),
});

module.exports = destroyExhibitorsValidation;