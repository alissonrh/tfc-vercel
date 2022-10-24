import { Request, Response } from 'express';

export default class LoginController {
  login(req: Request, res: Response): Response | void {
    if (!req.body.email || !req.body.password) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }
  }
}
