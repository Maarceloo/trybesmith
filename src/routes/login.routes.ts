import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginValidate from '../middlewares/LoginValidate';

const loginValidate = new LoginValidate();
const loginController = new LoginController();

const loginRoute = Router();

loginRoute.post('/', loginValidate.validate, loginController.getByUserName);

export default loginRoute;