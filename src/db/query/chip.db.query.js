import { chipGrid, colorField, valueField } from '#db/const/chip.db.const.js';
import { designGrid, designIdField } from '#db/const/design.db.const.js';
import { idField } from '#db/const/_common.db.const.js';

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
