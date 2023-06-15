import { createDesign } from '#db/query/design.db.query.js';
import {
  selectAll, selectBy,
} from '#db/query/_common.db.query.js';
import { designGrid } from '#db/const/grids.db.const.js';
import { idField, ownerIdField } from '#db/const/fields.db.const.js';

export const makeDesignRepo = ({ dbService: { db } }) =>
  ({
    getAll: () =>
      db.prepare(selectAll(designGrid)).all(),
    getById: (id) =>
      db.prepare(selectBy(designGrid, idField)).get({ id }),
    getByOwnerId: (ownerId) =>
      db.prepare(selectBy(designGrid, ownerIdField)).all({ ownerId }),

    /**
     * @param {{name, ownerId, houseId}} data
     */
    create: (data) => {
      const { changes, lastInsertRowid } = db.prepare(createDesign).run(data);
      if (changes !== 1) { throw new Error('could not create design'); }
      return lastInsertRowid;
    },
  });
