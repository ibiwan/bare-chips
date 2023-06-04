import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { register as registerDb } from './db/index.js'
import { init as initHttp } from './http/routes.js';
import { init as initGql } from './gql/index.js';
import { getUser } from './auth/identity.js';

const app = express()

const port = 3000
app.use(
  cors(),
  bodyParser.json(),
  registerDb(),
  getUser,
)

initHttp(app)

app.use(await initGql(app))

app.listen(port, () => {
  console.log('listening on port ' + port)
})
