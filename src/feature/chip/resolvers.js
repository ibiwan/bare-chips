import { getAllOf, resolveOneByParent, resolveOwner } from "#util/resolverTemplates.js"
import { id } from "#util/sqlTemplates.js";

import { chipsetId, selectChipsetById } from "#feature/chipset/sql.js";

import { insertChip, selectAllChips, selectChipById } from "./sql.js"

export const resolvers = {
  Query: {
    getAllChips: getAllOf(selectAllChips),
    getChipById: (_parent, input, contextValue, _info) => {
      const { db, authuser: { id: _ownerId } } = contextValue
      const { id } = input;

      return db.prepare(selectChipById).get({ id })
    }
  },
  Mutation: {
    createChip: (_parent, input, contextValue, _info) => {
      const { db, authuser: { id: ownerId } } = contextValue

      const result = db.prepare(insertChip).run({ ...input.createChipInput, ownerId })

      return db.prepare(selectChipById).get({ id: result.lastInsertRowid })
    },
  },
  Chip: {
    chipset: resolveOneByParent(selectChipsetById, chipsetId, id),
    owner: resolveOwner
  },
}
