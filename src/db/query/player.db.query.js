import { hashSync } from 'bcrypt';

import { idField } from '#db/const/_common.db.const.js';

import { playerGrid } from '../const/player.db.const.js';

const defaultAdmin = {
  username: 'admin',
  password: 'knowsall',
};

defaultAdmin.passhash = hashSync(defaultAdmin.password, 14);

export const createPlayerGrid = `
  CREATE TABLE IF NOT EXISTS ${playerGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT UNIQUE, 
    passhash STRING,
    isAdmin INTEGER NOT NULL DEFAULT 0
  );`;

export const createPlayer = `INSERT INTO ${playerGrid} (username, passhash) VALUES (@username, @passhash);`;

export const createAdminPlayer = `
  INSERT INTO ${playerGrid} 
    (username, passhash, isAdmin) 
    VALUES (@username, @passhash, 1);
`;
