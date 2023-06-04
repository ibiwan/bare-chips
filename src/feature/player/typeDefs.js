import gql from 'graphql-tag';

export const typeDefs = gql`
extend type Query {
  getPlayers: [Player!]!
  getPlayerById: Player
  getPlayersByGametableId: [Player!]!
}

extend type Mutation {
  createPlayer(createPlayerInput:CreatePlayerInput!):Player
}

type Player {
  id: Int!
  username: String!
  isAdmin: Boolean!
  atTables: [Gametable!]!
  inGames: [Game!]!
}
input CreatePlayerInput {
  username: String!
  password: String!
}
`

