import { templateGrid } from '#db/const/_template.db.const.js';
import { playerGrid } from '#db/const/player.db.const.js';
import { idField, ownerIdField } from '#db/const/_common.db.const.js';

export const createTemplateGrid = `
  CREATE TABLE IF NOT EXISTS ${templateGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${ownerIdField} INTEGER,

    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;
