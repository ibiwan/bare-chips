import gql from 'graphql-tag';

export const typeDefs = gql`
#extend type Query {
# }

extend type Mutation {
  createHouse(createHouseInput: CreateHouseInput!):House
}

type House {
  id: Int!
  name: String!
  gametables: [Gametable!]!
  players: [Player!]!
  owner: Player!
}
input CreateHouseInput {
  name: String!
}
`

