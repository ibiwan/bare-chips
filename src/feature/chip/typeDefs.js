import gql from 'graphql-tag';

export const typeDefs = gql`
extend type Query {
  getAllChips: [Chip!]!
  getChipById(id: Int!): Chip!
  getChipsByChipsetId: [Chip!]!
}

extend type Mutation {
  createChip(createChipInput:CreateChipInput!):Chip
}

type Chip {
  id: Int!
  color: String!
  value: Int!
  chipset: Chipset!
  owner: Player!
}

input CreateChipInput {
  color: String!
  value: Int!
  chipsetId: Int!
}
`
