import { hashSync } from 'bcrypt';

import { createAdminPlayer } from '#db/query/player.db.query.js';

import { populateCurrencyGrid } from '#db/query/currency.db.query.js';
import { schemae } from './schemae.js';

const admin = {
  username: 'admin',
  password: 'purple',
};

export const createTables = (db) => {
  schemae.forEach((script) => {
    // console.debug({ script })
    try {
      db.exec(script);
    } catch (e) {
      console.error('error running db script', e, script);
    }
  });
};

export const createAdmin = (db) => {
  try {
    admin.passhash = hashSync(admin.password, 14);
    db.prepare(createAdminPlayer).run(admin);
  } catch (e) {
    if (e.message !== 'UNIQUE constraint failed: player.username') {
      console.error('error creating admin player', { e });
    }
  }
};

export const createDollar = (db) => {
  try {
    db.prepare(populateCurrencyGrid).run();
  } catch (e) {
    console.error("couldn't create dollar", e);
  }
};

export const summarize = (_db) => {
  // const players = db.prepare(selectAllPlayers).all();
  // console.debug({ players })

  // const chips = db.prepare(selectAllChips).all();
  // console.debug({ chips });
};
