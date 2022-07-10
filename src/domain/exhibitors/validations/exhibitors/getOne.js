const { validate, Joi } = require('express-validation');

const getOneExhibitorsValidation = validate({
  params: Joi.object({
    idExhibitors: Joi.number().required(),
  }),
});

module.exports = getOneExhibitorsValidation;