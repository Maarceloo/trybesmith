import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserValidate from '../middlewares/UserValidate';

const userController = new UserController();
const userValidate = new UserValidate();

const userRoute = Router();

userRoute.post('/', userValidate.validate, userController.create);

export default userRoute;