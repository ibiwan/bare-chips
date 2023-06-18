import {
  activeGameIdField, designIdField, idField, ownerIdField,
} from '#db/const/fields.db.const.js';
import {
  designGrid, gameGrid, playerGrid, tableGrid,
} from '#db/const/grids.db.const.js';
import { selectAll, selectBy } from '#db/query/_common.db.query.js';

export const selectAllTables = selectAll(tableGrid);
export const selectTableById = selectBy(tableGrid, idField);
export const selectTablesByOwnerId = selectBy(tableGrid, ownerIdField);

export const createTableGrid = `
  CREATE TABLE IF NOT EXISTS ${tableGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${designIdField} INTEGER,
    ${activeGameIdField} INTEGER,
    ${ownerIdField} INTEGER,

    FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField}),
    FOREIGN KEY (${activeGameIdField}) REFERENCES ${gameGrid}(${idField}),
    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;
