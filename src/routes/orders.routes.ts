import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderController = new OrderController();

const orderRoute = Router();

orderRoute.get('/', orderController.getAll);

export default orderRoute;