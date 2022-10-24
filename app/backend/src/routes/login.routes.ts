import { Router } from 'express';
import LoginController from '../controller/login.controller';

const loginController = new LoginController();
const loginRouter = Router();

loginRouter.get('/', (req, res) => res.status(200).json({ message: 'Teste ok' }));

loginRouter.post('/', loginController.login);

export default loginRouter;
