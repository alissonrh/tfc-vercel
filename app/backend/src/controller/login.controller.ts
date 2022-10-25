import { Request, Response } from 'express';
import MissingParamError from '../errors/missingParamError';
import { IloginService } from '../interfaces/services/ilogin.interface';

export default class LoginController {
  private loginService: IloginService;

  constructor(loginService: IloginService) {
    this.loginService = loginService;
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new MissingParamError('All fields must be filled');
    }
    const response = await this.loginService.login(req.body);
    return res.status(200).json({ token: response });
  }
}
