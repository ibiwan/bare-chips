import { metaResolver } from '#gql/resolvers/_common.gql.resolvers.js';

const mr = metaResolver(({ houseService, hostService }) =>
  ({ houseService, hostService }));

export const houseResolvers = {
  Query: {
    getAllHouses: mr(({ houseService, authuser }) =>
      houseService.getAllHouses(authuser.id)),
  },
  Mutation: {
    createHouse: mr(({ input: { createHouseInput }, hostService, authuser }) =>
      hostService.createHouse(createHouseInput, authuser.id)),
    deleteHouse: mr(({ input: { houseId }, hostService, authuser }) =>
      hostService.deleteHouse(houseId, authuser.id)),
    invitePlayerToHouse: mr(({ input: { playerId, houseId }, hostService, authuser }) =>
      hostService.invitePlayerToHouse({ playerId, houseId }, authuser.id)),
  },
  House: {
    owner: (parent, _input, contextValue, _info) => {
      const { di: { houseService } } = contextValue;

      return houseService.getOwner(parent);
    },
  },
};
