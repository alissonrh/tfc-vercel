import { Request, Response, NextFunction } from 'express';
import { IUserRepository } from '../interfaces/user.interface';

import TokenManager from '../JWT/TokenManager';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const data = (await TokenManager.decodeToken(token)) as IUserRepository;

  if (!data) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' });
  }

  req.body = data;
  console.log('DATA', data);

  return next();
};

export default authenticate;
