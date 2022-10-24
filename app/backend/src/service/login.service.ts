import { IloginService } from '../interfaces/services/ilogin.interface';
import MissingParamError from '../errors/missingParamError';
import IUser from '../interfaces/services/user.interface';

export default class LoginService implements IloginService {
  login = (user: IUser): void => {
    if (!user.email || !user.password) {
      throw new MissingParamError('All fields must be filled');
    }
  };
}
