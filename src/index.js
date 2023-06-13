import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { getUser } from '#auth/getUser.middleware.js';
import { debugExpress } from '#util/debugExpress.js';
import { init as initHttp } from '#http/routes.js';
import { init as initGql } from '#gql/index.js';

import { diMiddleware } from './di.container.js';

const app = express();

const port = 3000;
app.use(
  cors(),
  bodyParser.json(),
  diMiddleware,
  debugExpress,
  getUser,
);

initHttp(app);

app.use(await initGql(app));

app.listen(port, () => {
  console.info(`listening on port ${port}`);
});
