import gql from 'graphql-tag';

// @ts-ignore (vs doesn't know gql is callable)
export const designTypeDefs = gql`
extend type Query {
  getAllDesigns: [Design!]!
  getDesignById: Design
}

extend type Mutation {
  createDesign(createDesignInput:CreateDesignInput!):Design
}

type Design {
  id: Int!
  name: String!
  chips: [Chip!]!
  owner: Player!
  house: House
}
input CreateDesignInput {
  name: String!
  chips: [CreateOrphanChipInput!]
  houseId: Int
}
input CreateOrphanChipInput {
  color: String!
  value: Int!
}
`;
