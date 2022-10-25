import { arrayTeams } from '../../interfaces/teams.interface';
import TeamsModel from '../../database/models/teams.model';

export default class UserRepository {
  private teamsModel = TeamsModel;

  public findAll = async (): Promise<arrayTeams | null> => {
    const responseUser = await this.teamsModel.findAll();
    return responseUser;
  };
}
