import { Router } from "express";
import userRouter from "./users.routes.js";
import ProductsRouter from "./products.route.js";
import cartRouter from "./cart.routes.js";



const router = Router();

router.use(userRouter);
router.use(ProductsRouter);
router.use(cartRouter);


export default router;