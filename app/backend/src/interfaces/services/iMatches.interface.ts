import ICustomMatches, { IMatches } from '../matches.interface';

export default interface IMatchesService {
  findAll(): Promise<ICustomMatches[] | IMatches[] | null>
}
