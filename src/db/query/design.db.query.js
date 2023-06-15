import { idField, nameField, ownerIdField } from '#db/const/fields.db.const.js';
import { designGrid, playerGrid } from '#db/const/grids.db.const.js';

export const createDesignGrid = `--sql
  CREATE TABLE IF NOT EXISTS ${designGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    ${nameField} TEXT,
    ${ownerIdField} INTEGER,
    
    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;

export const createDesign = `
  INSERT INTO ${designGrid} (${nameField}, ${ownerIdField}) 
    VALUES (@${nameField}, @${ownerIdField});
`;
