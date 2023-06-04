import { id, ownerId, selectAll, selectBy } from "../../util/sqlTemplates.js";
import { playerTable } from "../player/sql.js";

export const houseTable = 'house'
export const houseId = 'houseId'
export const selectAllHouses = selectAll(houseTable)
export const selectHouseById = selectBy(houseTable, id);
export const selectHousesByOwnerId = selectBy(houseTable, ownerId);

export const createHouseTable = `
  CREATE TABLE IF NOT EXISTS ${houseTable} (
    ${id} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    ${ownerId} INTEGER,
    FOREIGN KEY (${ownerId}) REFERENCES ${playerTable}(${id})
  );`;

export const insertHouse = `INSERT INTO ${houseTable} (name, ${ownerId}) VALUES (@name, @${ownerId});`;
