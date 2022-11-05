import * as express from 'express';
import * as bodyParser from 'body-parser';

import MoviesApi from './api/MoviesApi';
import logger from './services.logger';

const PORT = 8934;

const app = express();
const moviesApi = new MoviesApi();

app.use(bodyParser.json());

app.post('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.create(req.body));
});

app.get('/movies', (_, res: express.Response) => {
  res.json(moviesApi.findMany());
});

app.listen(PORT, () => {
  logger.info('server started on port ' + PORT);
});
