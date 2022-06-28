import { validate, Joi } from "express-validation";

export const getUserPost = validate({
  params: Joi.object({
    userID: Joi.number().required(),
  }),
});
