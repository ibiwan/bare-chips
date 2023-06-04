import { id, ownerId, selectAll, selectBy } from "#util/sqlTemplates.js";
import { playerTable } from "#feature/player/sql.js";

export const gameTable = 'game'
export const gameId = 'gameId'
export const selectAllGames = selectAll(gameTable)
export const selectGameById = selectBy(gameTable, id);
export const selectGamesByOwnerId = selectBy(gameTable, ownerId);

export const createGameTable = `
  CREATE TABLE IF NOT EXISTS ${gameTable} (
    ${id} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${ownerId} INTEGER,
    FOREIGN KEY (${ownerId}) REFERENCES ${playerTable}(${id})
  );`;
