import { validate, Joi } from "express-validation";

export const destroy = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});
