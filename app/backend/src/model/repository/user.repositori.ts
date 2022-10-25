import { IUserRepository } from '../../interfaces/user.interface';
import UserModel from '../../database/models/user.model';

export default class UserRepository {
  private userModel = UserModel;

  public findByEmail = async (email: string): Promise<IUserRepository | null> => {
    const responseUser = await this.userModel.findOne({ where: { email } });
    return responseUser;
  };
}
