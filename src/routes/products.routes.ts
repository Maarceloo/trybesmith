import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const productRoute = Router();

productRoute.get('/', productController.getAll);
productRoute.post('/', productController.create);

export default productRoute;