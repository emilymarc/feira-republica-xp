const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		name: Joi.string().min(2).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(25).required(),
	})
});
