import { Router } from 'express';
import authenticate from '../middleware/authenticate';
import MatchesController from '../controller/matches.controller';
import MatchesService from '../service/matches.service';
import MatchesRepository from '../model/repository/matches.repository';

const matchesRouter = Router();
const matchesModel = new MatchesRepository();
const matchesService = new MatchesService(matchesModel);
const matchesController = new MatchesController(matchesService);

matchesRouter.get('/', (req, res) => matchesController.findAll(req, res));
matchesRouter.post('/', authenticate, (req, res) => matchesController.createMatche(req, res));
matchesRouter.patch('/:id/finish', (req, res) => matchesController.finish(req, res));
matchesRouter.patch('/:id', (req, res) => matchesController.updateGoals(req, res));

export default matchesRouter;
