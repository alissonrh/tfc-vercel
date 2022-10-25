import { Router } from 'express';
import UserRepository from '../model/repository/user.repositori';
import LoginService from '../service/login.service';
import LoginController from '../controller/login.controller';

const loginRouter = Router();
const loginModel = new UserRepository();
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

loginRouter.post('/', (req, res) => loginController.login(req, res));

export default loginRouter;
