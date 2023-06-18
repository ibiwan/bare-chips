import { parseGql } from '#util/parseGql.js';

export const playerTypeDefs = parseGql(
  `#graphql
    extend type Query {
      getAllPlayers: [Player!]!
      getCurrentPlayer: Player
      getPlayerById(playerId:Int): Player
      getPlayersByTableId: [Player!]!
    }

    extend type Mutation {
      createPlayer(createPlayerInput:CreatePlayerInput!):Player
    }

    type Player {
      id: Int!
      username: String!
      isAdmin: Boolean!

      houseInvites: String
      tableInvites: String
      gameInvites: String
      # atTables: [Table!]!
      # inGames: [Game!]!
    }

    input CreatePlayerInput {
      username: String!
      password: String!
    }
  `,
  'player',
);
