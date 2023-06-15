import { houseIdField, idField, ownerIdField } from '#db/const/fields.db.const.js';
import { houseGrid, playerGrid } from '#db/const/grids.db.const.js';

export const createHouseGrid = `
  CREATE TABLE IF NOT EXISTS ${houseGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    ${ownerIdField} INTEGER,
    
    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;

export const createHouse = `
  INSERT INTO ${houseGrid} (name, ${ownerIdField}) 
    VALUES (@name, @${ownerIdField});
`;

export const deleteHouse = `
  DELETE FROM ${houseGrid} 
    WHERE ${idField} = @${houseIdField};
`;
