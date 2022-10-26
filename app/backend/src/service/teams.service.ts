import ITeamsService from '../interfaces/services/iTeams.interface';
import ITeams, { arrayTeams } from '../interfaces/teams.interface';
import TeamsRepository from '../model/repository/teams.repository';

export default class TeamsService implements ITeamsService {
  constructor(private teamsRepository = new TeamsRepository()) {}

  public findAll = async (): Promise<arrayTeams | null> => {
    const response = await this.teamsRepository.findAll();
    return response;
  };

  public findOne = async (id: number): Promise<ITeams | null> => {
    const response = await this.teamsRepository.findOne(id);
    return response;
  };
}
