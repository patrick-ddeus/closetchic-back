import { Router } from "express";
import userRouter from "./users.routes.js";
import ProductsRouter from "./products.routes.js";

const router = Router()

router.use(userRouter)
router.use(ProductsRouter)


export default router