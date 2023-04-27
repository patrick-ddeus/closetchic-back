import Joi from "joi";

export const InsertProductSchema = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    price: Joi.number().required()
});