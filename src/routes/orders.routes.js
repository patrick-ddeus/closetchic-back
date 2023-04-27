import { Router } from "express";
import OrdersController from "../controllers/orders.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validOrder } from "../middlewares/orders.middleware.js";

const OrderRouter = Router();

OrderRouter.post('/orders', authMiddleware, validOrder, OrdersController.createOrder);
OrderRouter.get('/orders', authMiddleware, OrdersController.getUserOrders);

export default OrderRouter;