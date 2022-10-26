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
}