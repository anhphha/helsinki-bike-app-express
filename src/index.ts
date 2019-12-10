import * as express from 'express';
import * as bodyParser from 'body-parser';

import MoviesApi from './api/MoviesApi';
import logger from './services.logger';

const app = express();
const moviesApi = new MoviesApi();

app.use(bodyParser.json());

app.post('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.create(req.body));
});

app.get('/movies', (_, res: express.Response) => {
  res.json(moviesApi.findMany());
});

app.listen(5000, () => {
  logger.info('server started on port 5000');
});
