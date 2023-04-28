import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateCart } from "../middlewares/cart.middleware.js";


const cartRouter = Router();

cartRouter.use(authMiddleware);
cartRouter.post('/cart', validateCart, cartController.postCart);
cartRouter.get('/cart', cartController.getCart);
cartRouter.delete('/cart', cartController.deleteCart);

export default cartRouter;