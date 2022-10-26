import { Router } from 'express';
import TeamsService from '../service/teams.service';
import TeamsRepository from '../model/repository/teams.repository';
import TeamsController from '../controller/teams.controller';

const teamsRouter = Router();
const teamsModel = new TeamsRepository();
const teamsService = new TeamsService(teamsModel);
const teamsController = new TeamsController(teamsService);

teamsRouter.get('/', (req, res) => teamsController.findAll(req, res));
teamsRouter.get('/:id', (req, res) => teamsController.findOne(req, res));

export default teamsRouter;
