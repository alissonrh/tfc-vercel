import { Router } from 'express';
import UserRepository from '../model/repository/user.repositori';
import LoginService from '../service/login.service';
import LoginController from '../controller/login.controller';
import authenticate from '../middleware/authenticate';

const loginRouter = Router();
const loginModel = new UserRepository();
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

loginRouter.post('/', (req, res) => loginController.login(req, res));
loginRouter.get('/validate', authenticate, loginController.auth);

export default loginRouter;
