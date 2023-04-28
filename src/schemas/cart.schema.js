import Joi from "joi";

export const cartItemSchema = Joi.object({
  slug: Joi.string().required(),
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
  product: Joi.string().required(),
  size: Joi.string().valid("p", "m", "g").required()
});

export const cartSchema = Joi.array().items(cartItemSchema).required();