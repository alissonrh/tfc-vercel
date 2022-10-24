import { Request, Response } from 'express';
import { IloginService } from '../interfaces/services/ilogin.interface';

export default class LoginController {
  private readonly loginService: IloginService;

  constructor(loginService: IloginService) {
    this.loginService = loginService;
  }

  login(req: Request, res: Response): Response {
    this.loginService.login(req.body);
    return res.sendStatus(200);
  }
}
