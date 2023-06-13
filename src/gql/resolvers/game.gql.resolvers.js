export const gameResolvers = {
  Query: {
    getAllGames: (_parent, _input, contextValue, _info) => {
      const { di: { gameService }, authuser: _user } = contextValue;

      return gameService.getAll();
    },
  },
  Mutation: {
  },
};
