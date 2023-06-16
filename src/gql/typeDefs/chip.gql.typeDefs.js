import { parseGql } from '#util/parseGql.js';

export const chipTypeDefs = parseGql(
  `#graphql
    extend type Query {
      getAllChips: [Chip!]!
      getChipById(id: Int!): Chip!
      getChipsByDesignId: [Chip!]!
    }

    extend type Mutation {
      createChip(createChipInput:CreateChipInput!):Chip
    }

    type Chip {
      id: Int!
      color: String!
      value: Int!
      design: Design!
      owner: Player!
    }

    input CreateChipInput {
      color: String!
      value: Int!
      designId: Int!
    }
    `,
  'chip',
);
