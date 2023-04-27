import { Router } from "express";
import userRouter from "./users.routes.js";
import ProductsRouter from "./products.routes.js";
import OrderRouter from "./orders.routes.js";
import cartRouter from "./cart.routes.js";

const router = Router();

router.use(userRouter)
router.use(ProductsRouter)
router.use(OrderRouter)
router.use(userRouter);
router.use(ProductsRouter);
router.use(cartRouter);

export default router;
