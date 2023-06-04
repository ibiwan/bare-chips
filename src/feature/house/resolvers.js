import { getAllOf, resolveOwner } from "#util/resolverTemplates.js";

import { insertHouse, selectAllHouses, selectHouseById } from "./sql.js"

export const resolvers = {
  Query: {
    getAllHouses: getAllOf(selectAllHouses),
  },
  Mutation: {
    createHouse: (parent, input, contextValue, info) => {
      const { db, authuser: { id: ownerId } } = contextValue

      const result = db.prepare(insertHouse).run({ ...input.createHouseInput, ownerId })

      return db.prepare(selectHouseById).get({ id: result.lastInsertRowid })
    },
  },
  House: {
    owner: resolveOwner
  },
}
