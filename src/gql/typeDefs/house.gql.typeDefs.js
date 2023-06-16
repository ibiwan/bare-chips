import { parseGql } from '#util/parseGql.js';

export const houseTypeDefs = parseGql(
  `#graphql
    extend type Query {
      getAllHouses: [House!]!
    }

    extend type Mutation {
      createHouse(createHouseInput: CreateHouseInput!):House
      invitePlayerToHouse(invitePlayerToHouseInput: InvitePlayerToHouseInput!):[Player!]!
      deleteHouse(houseId:Int!):Boolean!
      editHouse(editHouseInput: EditHouseInput!):House
    }

    type House {
      id: Int!
      name: String!
      tables: [Table!]!
      players: [Player!]!
      owner: Player!
    }

    input CreateHouseInput {
      name: String!
    }

    input EditHouseInput {
      houseId: Int!
      name: String
    }

    input InvitePlayerToHouseInput{
      playerId: Int!
      houseId: Int!
    }
  `,
  'house',
);
