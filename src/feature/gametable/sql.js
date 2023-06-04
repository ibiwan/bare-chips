import { id, ownerId, selectAll, selectBy } from "../../util/sqlTemplates.js";
import { playerTable } from "../player/sql.js";

export const gametableTable = 'gametable'
export const gametableId = 'gametableId'
export const selectAllGametables = selectAll(gametableTable)
export const selectGametableById = selectBy(gametableTable, id);
export const selectGametablesByOwnerId = selectBy(gametableTable, ownerId);

export const createGametableTable = `
  CREATE TABLE IF NOT EXISTS ${gametableTable} (
    ${id} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${ownerId} INTEGER,
    FOREIGN KEY (${ownerId}) REFERENCES ${playerTable}(${id})
  );`;
