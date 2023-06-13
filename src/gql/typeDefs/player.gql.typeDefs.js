import gql from 'graphql-tag';

// @ts-ignore (vs doesn't know gql is callable)
export const playerTypeDefs = gql`
extend type Query {
  getAllPlayers: [Player!]!
  getCurrentPlayer: Player
  getPlayerById: Player
  getPlayersByTableId: [Player!]!
}

extend type Mutation {
  createPlayer(createPlayerInput:CreatePlayerInput!):Player
}

type Player {
  id: Int!
  username: String!
  isAdmin: Boolean!
  atTables: [Table!]!
  inGames: [Game!]!
}
input CreatePlayerInput {
  username: String!
  password: String!
}
`;
