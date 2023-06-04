import gql from 'graphql-tag';

export const typeDefs = gql`
#extend type Query {
# }

# extend type Mutation {
# }

type Game{
  id: Int!
  name: String!
  gametable: Gametable!
}
input CreateGameInput {
  name: String!
  gametableId: Int!
}
`