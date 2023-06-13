import { idField, ownerIdField } from '#db/const/_common.db.const.js';

import {
  designGrid, designIdField, designJoinHouse, nameField,
} from '#db/const/design.db.const.js';
import { houseGrid, houseIdField } from '#db/const/house.db.const.js';
import { playerGrid } from '#db/const/player.db.const.js';

export const createDesignGrid = `
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

export const createDesignJoinHouseGrid = `
  CREATE TABLE IF NOT EXISTS ${designJoinHouse} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${designIdField} INTEGER NOT NULL,
    ${houseIdField}INTEGER NOT NULL,

    FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField}),
    FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),

    UNIQUE (${designIdField}, ${houseIdField})
  );
`;
