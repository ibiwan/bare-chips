import { parseGql } from '#util/parseGql.js';

export const houseTypeDefs = parseGql(
  `#graphql
    extend type Query {
      getAllHouses: [House!]!
      getHouseById(houseId:Int!):House
    }

    extend type Mutation {
      createHouse(createHouseInput: CreateHouseInput!):House
      deleteHouse(houseId:Int!):Boolean!
      editHouse(editHouseInput: EditHouseInput!):House
      createPlayerHouseLink(createPlayerHouseLinkInput: CreatePlayerHouseLinkInput!):House
    }

    type House {
      id: Int!
      name: String!
      tables: [Table!]!
      owner: Player!
      playerLinks: [PlayerHouseLink!]!
    }

    input CreateHouseInput {
      name: String!
    }

    input EditHouseInput {
      houseId: Int!
      name: String
    }

    type PlayerHouseLink {
      id: Int!
      player: Player!
      house: House!
      status:  HousePlayerInviteMode!
    }

    input CreatePlayerHouseLinkInput{
      playerId: Int!
      houseId: Int!
      status: HousePlayerInitialInviteMode!
    }

    enum HousePlayerInitialInviteMode {
      INVITED
      REQUESTED
    }

    enum HousePlayerInviteMode {
      INVITED
      REQUESTED
      MEMBER
      PRESENT
      BANNED
    }
  `,
  'house',
);
