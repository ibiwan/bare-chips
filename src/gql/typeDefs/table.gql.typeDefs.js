import { parseGql } from '#util/parseGql.js';

export const tableTypeDefs = parseGql(
  `#graphql
    #extend type Query {
    # }

    extend type Mutation {
      createTable(createTableInput:CreateTableInput!):Table
    }

    type Table {
      id: Int!
      name: String!
      activeGame: Game
      owner: Player!
      houseId: Int!
      players: [Player!]!
    }

    input CreateTableInput {
      name: String!
    }
  `,
  'table',
);
