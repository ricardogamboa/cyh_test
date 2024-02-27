import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.js';
import sequelize from './db/client.js';
import { plantSeeds } from './db/init.js';
import { PORT, API_URL } from './config.js';

const app: Express = express();
const port = PORT;

const allowedOrigins = [API_URL];
const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.use('/api', routes);

// TODO: change to db migrations and seeds
// https://sequelize.org/docs/v6/other-topics/migrations/
// Note: Force true enabled for testing porpuses
await sequelize.sync({ force: true });
await plantSeeds();

app.listen(port, ()=> {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
