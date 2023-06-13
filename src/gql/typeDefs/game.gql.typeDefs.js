import gql from 'graphql-tag';

// @ts-ignore (vs doesn't know gql is callable)
export const gameTypeDefs = gql`
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
`;
