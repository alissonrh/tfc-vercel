import { Router } from 'express';
import MatchesController from '../controller/matches.controller';
import MatchesService from '../service/matches.service';
import MatchesRepository from '../model/repository/matches.repository';

const matchesRouter = Router();
const matchesModel = new MatchesRepository();
const matchesService = new MatchesService(matchesModel);
const matchesController = new MatchesController(matchesService);

matchesRouter.get('/', (req, res) => matchesController.findAll(req, res));

export default matchesRouter;
