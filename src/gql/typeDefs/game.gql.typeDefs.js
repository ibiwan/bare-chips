import { parseGql } from '#util/parseGql.js';

export const gameTypeDefs = parseGql(
  `#graphql  
    #extend type Query {
    # }

    # extend type Mutation {
    # }

    type Game{
      id: Int!
      name: String!
      table: Table!
    }
    input CreateGameInput {
      name: String!
      tableId: Int!
    }
  `,
  'game',
);
