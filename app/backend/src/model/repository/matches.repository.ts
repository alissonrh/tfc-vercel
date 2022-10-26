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
    console.log(responseMatches);
    return responseMatches;
  };
}
