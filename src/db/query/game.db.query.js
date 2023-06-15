import { gameIdField, idField, ownerIdField } from '#db/const/fields.db.const.js';
import { gameGrid, playerGrid } from '#db/const/grids.db.const.js';

export const createGameGrid = `
  CREATE TABLE IF NOT EXISTS ${gameGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${gameIdField} INTEGER,
    ${ownerIdField} INTEGER,

    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField}),
    FOREIGN KEY (${gameIdField}) REFERENCES ${gameGrid}(${idField})
  );`;
