import { id, ownerId, selectAll, selectBy } from "../../util/sqlTemplates.js";
import { playerTable } from "../player/sql.js";

export const chipsetTable = 'chipset'
export const chipsetId = 'chipsetId'
export const selectAllChipsets = selectAll(chipsetTable)
export const selectChipsetById = selectBy(chipsetTable, id);
export const selectChipsetsByOwnerId = selectBy(chipsetTable, ownerId);

export const createChipsetTable = `
  CREATE TABLE IF NOT EXISTS ${chipsetTable} (
    ${id} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    ${ownerId} INTEGER,
    FOREIGN KEY (${ownerId}) REFERENCES ${playerTable}(${id})
  );`;

export const insertChipset = `INSERT INTO ${chipsetTable} (name, ${ownerId}) VALUES (@name, @${ownerId});`;
