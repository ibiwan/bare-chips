import { idField } from '#db/const/fields.db.const.js';
import { houseGrid } from '#db/const/grids.db.const.js';
import { selectAll, selectBy } from '#db/query/_common.db.query.js';
import { createHouse, deleteHouse, editHouse } from '#db/query/house.db.query.js';
import { createPlayerHouseLink, deletePlayerLinksForHouseId, selectPlayerHouseLinksByHouseId } from '#db/query/peoplejoins/house_to_players.db.query.js';

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
    edit: (houseId, { name }) => {
      const { changes } = db.prepare(editHouse).run({ houseId, name });
      return changes > 0;
    },
    deleteById: (houseId) => {
      db.prepare(deletePlayerLinksForHouseId).run({ houseId });
      const { changes } = db.prepare(deleteHouse).run({ houseId });
      return changes > 0;
    },
    createPlayerHouseLink: ({ houseId, playerId, status }) => {
      const { changes } = db.prepare(createPlayerHouseLink)
        .run({ houseId, playerId, status });
      return changes > 0;
    },
    getPlayerLinks: (houseId) =>
      db.prepare(selectPlayerHouseLinksByHouseId).all({ houseId }),
  });
