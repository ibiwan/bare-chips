import { getAllOf } from "#util/resolverTemplates.js";

import { selectAllGames } from "./sql.js";

export const resolvers = {
  Query: {
    getAllGames: getAllOf(selectAllGames),
  },
  Mutation: {
  },
}
