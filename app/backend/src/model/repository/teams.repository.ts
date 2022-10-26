import ITeams, { arrayTeams } from '../../interfaces/teams.interface';
import TeamsModel from '../../database/models/teams.model';

export default class TeamsRepository {
  private teamsModel = TeamsModel;

  public findAll = async (): Promise<arrayTeams | null> => {
    const responseTeams = await this.teamsModel.findAll();
    return responseTeams;
  };

  public findOne = async (id: number): Promise<ITeams | null> => {
    const responseTeams = await this.teamsModel.findByPk(id);
    return responseTeams;
  };
}
