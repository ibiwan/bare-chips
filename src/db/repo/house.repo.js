import { selectAll, selectBy } from '#db/query/_common.db.const.js';
import { idField } from '#db/const/_common.db.const.js';

import { houseGrid } from '#db/const/house.db.const.js';
import { createHouse, deleteHouse } from '#db/query/house.db.query.js';

// created with owner
// can add tables
// invite/ban players
// players accept invites
// created with ledger
// add designs to catalog

export const makeHouseRepo = ({ dbService: { db } }) =>
  ({
    getAll: () =>
      db.prepare(selectAll(houseGrid)).all(),
    getById: (id) =>
      db.prepare(selectBy(houseGrid, idField)).get({ id }),

    /**
     * @param {{name, ownerId}} data
     */
    create: (data) => {
      const { changes, lastInsertRowid } = db.prepare(createHouse).run(data);
      if (changes !== 1) { throw new Error('could not create house'); }
      return lastInsertRowid;
    },
    delete: (houseId) => {
      const result = db.prepare(deleteHouse).run({ houseId });
      console.log({ result });
    },
  });
