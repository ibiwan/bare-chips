import { metaResolver } from '#gql/resolvers/_common.gql.resolvers.js';

const mr = metaResolver(({ houseService, hostService }) =>
  ({ houseService, hostService }));

export const houseResolvers = {
  Query: {
    getAllHouses: mr(({ houseService, authuser }) =>
      houseService.getAllHouses(authuser.id)),
    getHouseById: mr(({ houseService, input: { houseId }, authuser }) =>
      houseService.getHouseById(houseId, authuser.id)),
  },
  Mutation: {
    createHouse: mr(({ input: { createHouseInput }, hostService, authuser }) =>
      hostService.createHouse(createHouseInput, authuser.id)),
    editHouse: mr(({ input: { editHouseInput }, hostService, authuser }) =>
      hostService.editHouse(editHouseInput, authuser.id)),
    deleteHouse: mr(({ input: { houseId }, hostService, authuser }) =>
      hostService.deleteHouse(houseId, authuser.id)),
    createPlayerHouseLink: mr(({
      input: { createPlayerHouseLinkInput }, hostService, authuser,
    }) =>
      hostService.createPlayerHouseLink(
        createPlayerHouseLinkInput,
        authuser.id,
      )),
  },
  House: {
    owner: (parent, _input, contextValue, _info) => {
      const { di: { houseService } } = contextValue;

      return houseService.getOwner(parent);
    },
    playerLinks: (parent, _input, contextValue, _info) => {
      const { di: { hostService } } = contextValue;
      return hostService.getPlayerLinks(parent);
    },
  },
  PlayerHouseLink: {
    player: (parent, _input, contextValue, _info) => {
      const { di: { playerService } } = contextValue;
      return playerService.getPlayerById(parent.playerId);
    },
  },
};
