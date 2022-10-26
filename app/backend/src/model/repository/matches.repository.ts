import Teams from '../../database/models/teams.model';
import ICustomMatches, { IMatches } from '../../interfaces/matches.interface';
import MatchesModel from '../../database/models/matches.model';

export default class MatchesRepository {
  private matchesModel = MatchesModel;

  public findAll = async (): Promise<IMatches[] | ICustomMatches[] | null> => {
    const responseMatches = await this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return responseMatches;
  };

  public findInProgress = async (progress: boolean):
  Promise<IMatches[] | ICustomMatches[] | null> => {
    console.log('repository', progress);
    const responseMatches = await this.matchesModel.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return responseMatches;
  };
}
