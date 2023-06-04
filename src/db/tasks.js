import { hashSync } from 'bcrypt'

import { insertPlayer } from '../feature/player/index.js'

import { schemae } from './schemae.js';

const admin = {
  username: 'joe' + Math.floor(100 * Math.random()),
  password: 'purple',
}

export const createTables = (db) => {
  schemae.map(script => db.exec(script))
}

export const createAdmin = (db) => {
  try {
    admin.passhash = hashSync(admin.password, 14)
    db.prepare(insertPlayer).run(admin)
  } catch (e) {
    if (e.message !== 'UNIQUE constraint failed: player.username') {
      console.log('error creating admin player', { e })
    }
  }
}

export const summarize = (db) => {
  // const players = db.prepare(selectAllPlayers).all();
  // console.log({ players })

  // const chips = db.prepare(selectAllChips).all();
  // console.log({ chips })
}
