import { arrayTeams } from '../interfaces/teams.interface';
import TeamsRepository from '../model/repository/teams.repository';

export default class TeamsService {
  constructor(private teamsRepository = new TeamsRepository()) {}

  public findAll = async (): Promise<arrayTeams | null> => {
    const response = await this.teamsRepository.findAll();
    return response;
  };
}
