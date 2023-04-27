import { Router } from "express";
import cartController from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post('/cart', cartController.postCart);

export default cartRouter;