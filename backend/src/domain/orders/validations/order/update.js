import { validate, Joi } from "express-validation";

export const update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    content: Joi.string().required(),
  }),
});
