import NotFoundError from '../errors/notFoundError';
import UnprocessableError from '../errors/unprocessableError';
import ICustomMatches, { IMatches } from '../interfaces/matches.interface';
import IMatchesService from '../interfaces/services/iMatches.interface';
import MatchesRepository from '../model/repository/matches.repository';
import TeamsService from './teams.service';

export default class MatchesService implements IMatchesService {
  constructor(private matchesRepository = new MatchesRepository()) { }

  public findAll = async (): Promise<IMatches[] | ICustomMatches[] | null> => {
    const response = await this.matchesRepository.findAll();
    return response;
  };

  public findInProgress = async (inProgress: boolean):
  Promise<IMatches[] | ICustomMatches[] | null> => {
    const response = await this.matchesRepository.findInProgress(inProgress);
    return response;
  };

  public finishMatch = async (id: number): Promise<object> => {
    const response = await this.matchesRepository.finishMatch(id);
    return response;
  };

  public createMatche = async (body: IMatches): Promise<IMatches> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = body;
    if (homeTeam === awayTeam) {
      throw new UnprocessableError('It is not possible to create a match with two equal teams');
    }

    const checkhomeTeam = await new TeamsService().findOne(homeTeam);
    const checkawayTeam = await new TeamsService().findOne(awayTeam);
    if (!checkhomeTeam || !checkawayTeam) {
      throw new NotFoundError('There is no team with such id!');
    }

    const response = await this.matchesRepository
      .createMatche({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });
    return response;
  };
}
