
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
    logger: {
      debug:console.debug,
      warn: console.warn,
      error: console.error,
      info: (...a) => {
        console.info('apollo logger -- ', ...a)
      }
    },
    formatError:(formattedError, error)=>{
      // @ts-ignore (error fields are unknown)
      const {stack, message, path, locations} = error
      console.log(locations)
      const locStr = locations.map(location=>`(line ${location.line}, col ${location.column})`).join("; ")
      // console.log({error, formattedError})
      // console.log(error.message, error.stack, error.path, error.locations)
      console.log(`${stack}\n"${message}" while resolving ${path} ${locStr}`)
      return formattedError
    }
  })

  await server.start();

  return expressMiddleware(server, {
    // @ts-ignore (context isn't in default req type)
    context: ({ req }) => req.context
  })
}
