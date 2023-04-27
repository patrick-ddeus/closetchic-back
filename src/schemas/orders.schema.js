import Joi from "joi";

const orderItemSchema = Joi.object({
    slug: Joi.string().required(),
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    product: Joi.string().required()
});

const orderSchema = Joi.object({
    orderItems: Joi.array().items(orderItemSchema).required(),
    user: Joi.string().required(),
    totalPrice: Joi.number().required(),
});

export default orderSchema;