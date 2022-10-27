import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderboard.service';

export default class LeaderboardController {
  leaderboardService = new LeaderboardService();

  async classificationHome(_req: Request, res: Response): Promise<Response> {
    const response = await this.leaderboardService.classificationHome();
    return res.status(200).json(response);
  }

  async classificationAway(_req: Request, res: Response): Promise<Response> {
    const response = await this.leaderboardService.classificationAway();
    return res.status(200).json(response);
  }

  async classification(_req: Request, res: Response): Promise<Response> {
    const response = await this.leaderboardService.classification();
    return res.status(200).json(response);
  }
}
