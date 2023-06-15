import {
  designIdField,
  idField,
  ownerIdField,
} from '#db/const/fields.db.const.js';
import { chipGrid } from '#db/const/grids.db.const.js';
import { selectAll, selectBy } from '#db/query/_common.db.query.js';
import { createChip } from '#db/query/chip.db.query.js';

export const makeChipRepo = ({ dbService: { db } }) =>
  ({
    getAll: () =>
      db.prepare(selectAll(chipGrid)).all(),
    getById: (id) =>
      db.prepare(selectBy(chipGrid, idField)).get({ id }),
    getByOwnerId: (ownerId) =>
      db.prepare(selectBy(chipGrid, ownerIdField)).all({ ownerId }),
    getByDesignId: (designId) =>
      db.prepare(selectBy(chipGrid, designIdField)).all({ designId }),

    /**
     * @param {{color, value, designId}} data
     */
    create: (data) => {
      const { changes, lastInsertRowid } = db.prepare(createChip).run(data);
      if (changes !== 1) {
        throw new Error('could not create chip');
      }
      return lastInsertRowid;
    },
  });
