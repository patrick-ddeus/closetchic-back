import { Router } from 'express';
import ProductsController from '../controllers/products.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { validProduct } from '../middlewares/products.middlewares.js';

const ProductsRouter = Router();

ProductsRouter.get('/products', authMiddleware, ProductsController.findAll);
ProductsRouter.post('/products', validProduct, ProductsController.insertOne);
ProductsRouter.get('/products/:slug', ProductsController.findOne);

export default ProductsRouter;