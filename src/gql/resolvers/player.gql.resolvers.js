export const playerResolvers = {
  Query: {
    getAllPlayers: (_parent, _input, contextValue, _info) => {
      const { di: { playerService } } = contextValue;
      return playerService.getAllPlayers();
    },
    getCurrentPlayer: (_parent, _input, contextValue, _info) => {
      const { di: { playerService }, authuser: { id } } = contextValue;

      return playerService.getPlayerById(id);
    },
  },
  Mutation: {
    createPlayer: (_parent, input, contextValue, _info) => {
      const { createPlayerInput } = input;
      const { di: { playerService }, authuser: { id: _ownerId } } = contextValue;

      return playerService.createPlayer(createPlayerInput);
    },
  },
};
