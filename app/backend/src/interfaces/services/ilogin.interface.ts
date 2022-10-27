import IUser from '../user.interface';

export interface IloginService {
  login(user: IUser): Promise<string>
}
