import { Router } from "express";
import userRouter from "./users.routes.js";
import ProductsRouter from "./products.routes.js";
import OrderRouter from "./orders.routes.js";

const router = Router()

router.use(userRouter)
router.use(ProductsRouter)
router.use(OrderRouter)

export default router