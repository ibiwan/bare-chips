import gql from 'graphql-tag';

export const typeDefs = gql`
extend type Query {
  getAllChipsets: [Chipset!]!
  getChipsetById: Chipset
}

extend type Mutation {
  createChipset(createChipsetInput:CreateChipsetInput!):Chipset
}

type Chipset {
  id: Int!
  name: String!
  chips: [Chip!]!
  owner: Player!
  house: House
}
input CreateChipsetInput {
  name: String!
  chips: [CreateOrphanChipInput!]
  houseId: Int
}
input CreateOrphanChipInput {
  color: String!
  value: Int!
}
`
