import { Router } from 'express';
import LoginService from '../service/login.service';
import LoginController from '../controller/login.controller';

const loginRouter = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

/* loginRouter.get('/teste', (req, res) => res.status(200).json({ message: 'Teste ok' })); */

loginRouter.post('/', (req, res) => loginController.login(req, res));

export default loginRouter;
