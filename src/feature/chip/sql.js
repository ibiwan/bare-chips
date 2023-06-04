import { id, ownerId, selectAll, selectBy } from "#util/sqlTemplates.js";
import { chipsetId, chipsetTable } from "#feature/chipset/sql.js";
import { playerTable } from "#feature/player/sql.js";

export const chipTable = 'chip'
export const chipId = 'chipId'
export const selectAllChips = selectAll(chipTable)
export const selectChipById = selectBy(chipTable, id);
export const selectChipsByOwnerId = selectBy(chipTable, ownerId);
export const selectChipsByChipsetId = selectBy(chipTable, chipsetId);

export const createChipTable = `
  CREATE TABLE IF NOT EXISTS ${chipTable} (
    ${id} INTEGER PRIMARY KEY,
    color TEXT, 
    value INTEGER, 
    ${chipsetId} INTEGER, 
    ${ownerId} INTEGER,

    FOREIGN KEY (${chipsetId}) REFERENCES ${chipsetTable}(${id}),
    FOREIGN KEY (${ownerId}) REFERENCES ${playerTable}(${id})
);`;

export const insertChip = `
INSERT INTO ${chipTable} 
  (color, value, ${chipsetId}, ${ownerId}) 
  VALUES (@color, @value, @${chipsetId}, @${ownerId});
`;
