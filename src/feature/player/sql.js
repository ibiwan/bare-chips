import { id, ownerId, selectAll, selectBy } from "../../util/sqlTemplates.js";

export const playerTable = 'player'
export const playerId = 'playerId'
export const selectAllPlayers = selectAll(playerTable)
export const selectPlayerById = selectBy(playerTable, id);
export const selectPlayerByUsername = selectBy(playerTable, 'username');

export const createPlayerTable = `
  CREATE TABLE IF NOT EXISTS ${playerTable} (
    ${id} INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT UNIQUE, 
    passhash STRING
  );`;

export const insertPlayer = `INSERT INTO ${playerTable} (username, passhash) VALUES (@username, @passhash);`;
