import { Router } from 'express';

const teamsRouter = Router();

teamsRouter.get('/', (req, res) => res.sendStatus(200));

export default teamsRouter;
