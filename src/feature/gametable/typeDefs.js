import gql from 'graphql-tag';

export const typeDefs = gql`
#extend type Query {
# }

extend type Mutation {
  createGametable(createGametableInput:CreateGametableInput!):Gametable
}

type Gametable {
  id: Int!
  name: String!
  activeGame: Game
  owner: Player!
  houseId: Int!
  players: [Player!]!
}
input CreateGametableInput {
  name: String!
}
`

