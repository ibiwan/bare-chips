import gql from 'graphql-tag';

// @ts-ignore (vs doesn't know gql is callable)
export const houseTypeDefs = gql`
extend type Query {
  getAllHouses: [House!]!
}

extend type Mutation {
  createHouse(createHouseInput: CreateHouseInput!):House
  invitePlayerToHouse(invitePlayerToHouseInput: InvitePlayerToHouseInput!):[Player!]!
  deleteHouse(houseId:Int!):Boolean!
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

input InvitePlayerToHouseInput{
  playerId: Int!
  houseId: Int!
}
`;
