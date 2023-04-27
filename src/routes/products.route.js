import { Router } from 'express';
import ProductsController from '../controllers/products.controller.js';

const ProductsRouter = Router();

ProductsRouter.get('/', ProductsController.findAll);
ProductsRouter.get('/products/:slug', ProductsController.findOne);
ProductsRouter.post('/products', ProductsController.insertOne);

export default ProductsRouter;