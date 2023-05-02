import Joi from "joi";

const addressSchema = Joi.object({
    district: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.number().required(),
    complement: Joi.string().allow("").optional()
});

const shippingSchema = Joi.object({
    fullName: Joi.string().required(),
    address: addressSchema,
    postalCode: Joi.string().required(),
});

const orderItemSchema = Joi.object({
    slug: Joi.string().required(),
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    product: Joi.string().required(),
    size: Joi.string().valid("p", "m", "g").required()
});

const orderSchema = Joi.object({
    shippingAddress: shippingSchema,
    orderItems: Joi.array().items(orderItemSchema).required(),
    totalPrice: Joi.number().required(),
    priceItems: Joi.number().required(),
    paymentMethod: Joi.string().required(),
    tel: Joi.string().allow("").optional(),
    email: Joi.string().email().required(),
    isPaid: Joi.boolean(),
    paidAt: Joi.date()
});

export default orderSchema;