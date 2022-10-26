import { Request, Response } from 'express';
import IMatchesService from '../interfaces/services/iMatches.interface';

export default class MatchesController {
  constructor(private matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const response = await this.matchesService.findAll();
    console.log('CONTROLE', response);
    return res.status(200).json(response);
  }
}
