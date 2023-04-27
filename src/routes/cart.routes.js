import { Router } from "express";
import cartController from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post('/cart', cartController.postCart);
cartRouter.get('/cart', cartController.getCart);

export default cartRouter;