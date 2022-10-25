import { arrayTeams } from '../../interfaces/teams.interface';
import TeamsModel from '../../database/models/teams.model';

export default class TeamsRepository {
  private teamsModel = TeamsModel;

  public findAll = async (): Promise<arrayTeams | null> => {
    const responseTeams = await this.teamsModel.findAll();
    return responseTeams;
  };
}
