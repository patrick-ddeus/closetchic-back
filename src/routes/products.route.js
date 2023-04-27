import { Router } from 'express';
import ProductsController from '../controllers/products.controller.js';

const ProductsRouter = Router();

ProductsRouter.get('/', ProductsController.findAll);

export default ProductsRouter;