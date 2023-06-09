import orderSchema from "../schemas/orders.schema.js";
import { ObjectId } from "mongodb";

export const validOrder = (req, res, next) => {
    const {
        orderItems,
        shippingAddress,
        totalPrice,
        paymentMethod,
        tel,
        isPaid,
        paidAt,
        email,
        priceItems } = req.body;
    const user = req.id;

    const { error } = orderSchema.validate(
        { orderItems, shippingAddress, totalPrice, paymentMethod, tel, isPaid, paidAt, email, priceItems },
        { abortEarly: false }
    );

    if (error) {
        const erros = error.details.map((detail) => detail.message);
        return res.status(422).json({ message: "Campo body inválido!", error: erros });
    }

    const transformedOrderItems = orderItems.map((order) => {
        return { ...order, product: new ObjectId(order.product) };
    });

    const transformedUser = new ObjectId(user);

    req.locals = {
        orderItems: transformedOrderItems,
        user: transformedUser,
        shippingAddress,
        totalPrice,
        paymentMethod,
        tel,
        isPaid,
        paidAt,
        email,
        priceItems
    };
    return next();
};