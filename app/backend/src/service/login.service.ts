import * as bcrypt from 'bcryptjs';
import TokenManager from '../JWT/TokenManager';
import UnauthorizedError from '../errors/unauthorizedError';
import IUser from '../interfaces/user.interface';
import UserRepository from '../model/repository/user.repositori';
import { IloginService } from '../interfaces/services/ilogin.interface';

export default class LoginService implements IloginService {
  constructor(private userRepository = new UserRepository()) {}

  public login = async (user: IUser): Promise<string> => {
    const response = await this.userRepository.findByEmail(user.email);

    if (!response || !bcrypt.compareSync(user.password, response.password)) {
      throw new UnauthorizedError('Incorrect email or password');
    }

    const token = TokenManager.makeToken(user);
    return token;
  };
}
