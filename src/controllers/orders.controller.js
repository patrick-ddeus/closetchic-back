import OrdersService from "../services/orders.service.js";
import { ObjectId } from "mongodb";

const createOrder = async (req, res) => {
    const order = req.locals;

    try {
        await OrdersService.createOrderService(order);

        res.status(201).json({ message: "Pedido realizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserOrders = async (req, res) => {
    const id = req.id;

    try {
        const orders = await OrdersService.findOrderService({ user: new ObjectId(id) });
        
        res.status(201).json({ message: "Ok!", orders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    createOrder,
    getUserOrders
};