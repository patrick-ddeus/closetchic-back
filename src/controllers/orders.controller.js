import OrdersService from "../services/orders.service.js";

const createOrder = async (req, res) => {
    const order = req.locals;
    try {
        await OrdersService.createOrderService(order);
        res.status(201).json({ message: "Pedido realizado com sucesso!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    createOrder
};