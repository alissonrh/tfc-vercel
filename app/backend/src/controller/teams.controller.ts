import { Request, Response } from 'express';
import ITeamsService from '../interfaces/services/iTeams.interface';

export default class TeamsController {
  constructor(private teamsService: ITeamsService) {
    this.teamsService = teamsService;
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const response = await this.teamsService.findAll();
    return res.status(200).json(response);
  }
}
