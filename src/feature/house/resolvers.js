import { insertHouse, selectHouseById } from "./sql.js"
import { resolveOwner } from "../../util/resolverTemplates.js";

export const resolvers = {
  Query: {
  },
  Mutation: {
    createHouse: (parent, input, contextValue, info) => {
      // console.log({ input, contextValue })

      const { db, authuser: { id: ownerId } } = contextValue

      const result = db.prepare(insertHouse).run({ ...input.createHouseInput, ownerId })

      return db.prepare(selectHouseById).get({ id: result.lastInsertRowid })
    },
  },
  House: {
    owner: resolveOwner
  },
}
