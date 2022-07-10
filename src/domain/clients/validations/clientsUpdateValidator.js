const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		name: Joi.string().min(2),
		email: Joi.string().email(),
		password: Joi.string().min(5).max(25),
	})
});
