import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import ProductValidate from '../middlewares/ProductValidate';

const productController = new ProductController();
const productMiddlewares = new ProductValidate();

const productRoute = Router();

productRoute.get('/', productController.getAll);
productRoute.post('/', productMiddlewares.validate, productController.create);

export default productRoute;