import ICustomMatches, { IMatches } from '../interfaces/matches.interface';
import IMatchesService from '../interfaces/services/iMatches.interface';
import MatchesRepository from '../model/repository/matches.repository';

export default class MatchesService implements IMatchesService {
  constructor(private matchesRepository = new MatchesRepository()) { }

  public findAll = async (): Promise<IMatches[] | ICustomMatches[] | null> => {
    const response = await this.matchesRepository.findAll();
    return response;
  };
}
