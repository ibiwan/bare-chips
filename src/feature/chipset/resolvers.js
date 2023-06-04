import { getAllOf, resolveManyByParent, resolveOwner } from "../../util/resolverTemplates.js";
import { id } from "../../util/sqlTemplates.js";

import { insertChip, selectChipsByChipsetId } from "../chip/index.js"

import { chipsetId, insertChipset, selectAllChipsets, selectChipsetById } from "./sql.js";

export const resolvers = {
  Query: {
    getAllChipsets: getAllOf(selectAllChipsets),
  },
  Mutation: {
    createChipset: (_parent, input, contextValue, _info) => {
      console.log({ contextValue })
      const { chips, ...flatChipsetInputs } = input.createChipsetInput
      const { db, authuser: { id: ownerId } } = contextValue

      const { lastInsertRowid: chipsetId } = db.prepare(insertChipset).run({ ...flatChipsetInputs, ownerId })

      chips.map(createChipInput => {
        db.prepare(insertChip).run({ ...createChipInput, chipsetId, ownerId })
      })

      return db.prepare(selectChipsetById).get({ id: chipsetId })
    }
  },
  Chipset: {
    chips: resolveManyByParent(selectChipsByChipsetId, id, chipsetId),
    owner: resolveOwner
  }
}
