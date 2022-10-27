import { Router } from 'express';
import LeaderboardController from '../controller/leaderboard.controller';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/home', (req, res) => leaderboardController.classificationHome(req, res));
leaderboardRouter.get('/away', (req, res) => leaderboardController.classificationAway(req, res));
leaderboardRouter.get('/', (req, res) => leaderboardController.classification(req, res));

export default leaderboardRouter;
