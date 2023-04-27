import { Router } from "express";
import OrdersController from "../controllers/orders.controller.js";
import { validOrder } from "../middlewares/orders.middleware.js";

const OrderRouter = Router();

OrderRouter.post('/order', validOrder, OrdersController.createOrder);

export default OrderRouter;