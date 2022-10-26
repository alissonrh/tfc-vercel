import { Request, Response } from 'express';
import IMatchesService from '../interfaces/services/iMatches.interface';

export default class MatchesController {
  constructor(private matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    if (!inProgress) {
      const response = await this.matchesService.findAll();
      return res.status(200).json(response);
    }
    const stringToBoolean = Boolean(JSON.parse(inProgress as string));
    const response = await this.matchesService.findInProgress(stringToBoolean);
    return res.status(200).json(response);
  }

  async finish(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.matchesService.finishMatch(Number(id));
    return res.status(200).json(response);
  }

  async createMatche(req: Request, res: Response): Promise<Response> {
    const response = await this.matchesService.createMatche(req.body);
    return res.status(201).json(response);
  }

  async updateGoals(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const response = await this.matchesService
      .updateGoals(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json(response);
  }
}
