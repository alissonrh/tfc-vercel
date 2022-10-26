import ITeams from '../teams.interface';

export default interface ITeamsService {
  findAll(): Promise<ITeams[] | null >
  findOne(id: number): Promise<ITeams | null >
}
