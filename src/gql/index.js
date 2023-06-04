
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from '@apollo/server';
import http from 'http';

import { schemae } from './schemae.js';

const schema = buildSubgraphSchema(schemae);

export const init = async (app) => {
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  return expressMiddleware(server, {
    context: ({ req }) => req.context
  })
}
