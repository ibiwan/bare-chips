import {
  colorField, designIdField, idField, valueField,
} from '#db/const/fields.db.const.js';
import { chipGrid, designGrid } from '#db/const/grids.db.const.js';

export const createChipGrid = `
  CREATE TABLE IF NOT EXISTS ${chipGrid} (
    ${idField} INTEGER PRIMARY KEY,
    ${colorField} TEXT, 
    ${valueField} INTEGER, 
    ${designIdField}INTEGER, 

    FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField})
);`;

export const createChip = `
  INSERT INTO ${chipGrid}  
    (${colorField}, ${valueField}, ${designIdField}) 
    VALUES (@${colorField}, @${valueField}, @${designIdField});
`;
