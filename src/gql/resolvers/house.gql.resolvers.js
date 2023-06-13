import { metaResolver } from '#gql/resolvers/_common.gql.resolvers.js';

const mr = metaResolver(({ houseService }) =>
  ({ houseService }));

export const houseResolvers = {
  Query: {
    getAllHouses: mr(({ houseService, authuser }) =>
      houseService.getAllHouses(authuser.id)),
  },
  Mutation: {
    createHouse: mr(({ input, houseService, authuser }) =>
      houseService.create(input, authuser.id)),
    deleteHouse: mr(({ input: { houseId }, houseService, authuser }) =>
      houseService.delete(houseId, authuser.id)),
    invitePlayerToHouse: (_parent, input, contextValue, _info) => {
      const { invitePlayerToHouseInput: { playerId, houseId } } = input;
      const { di: { hostService }, authuser: { id: ownerId } } = contextValue;

      return hostService.invitePlayerToHouse(ownerId, playerId, houseId);
    },
  },
  House: {
    owner: (parent, _input, contextValue, _info) => {
      const { di: { houseService } } = contextValue;

      return houseService.getOwner(parent);
    },
  },
};
