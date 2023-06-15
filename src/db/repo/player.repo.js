// create/own house
// receive/accept house invite
// receive/accept table boss invite
// create game for table
// join/leave table
// receive/accept game invite
// opt into game/hand
// ante/bid/fold/etc
// buyin/payout with house
// place/collect money at table
// create/duplicate/modify/publish design

import { createPlayer } from '#db/query/player.db.query.js';
import { selectAll, selectBy } from '#db/query/_common.db.query.js';
import { playerGrid } from '#db/const/grids.db.const.js';
import { idField, usernameField } from '#db/const/fields.db.const.js';

export const makePlayerRepo = ({ dbService: { db } }) =>
  ({
    getAll: () =>
      db.prepare(selectAll(playerGrid)).all(),
    getById: (id) =>
      db.prepare(selectBy(playerGrid, idField)).get({ id }),
    getByUsername: (username) =>
      db.prepare(selectBy(playerGrid, usernameField)).get({ username }),
    /**
       * @param {{username, passhash}} data
       */
    create: (data) => {
      const { changes, lastInsertRowid } = db.prepare(createPlayer).run(data);
      if (changes !== 1) { throw new Error('could not create player'); }
      return lastInsertRowid;
    },
  });
