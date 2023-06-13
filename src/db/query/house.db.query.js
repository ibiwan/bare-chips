import {
  idField,
  ownerIdField,
} from '#db/const/_common.db.const.js';

import { designGrid, designIdField } from '#db/const/design.db.const.js';
import {
  houseGrid, houseIdField, houseJoinDesign, houseJoinPlayer,
} from '#db/const/house.db.const.js';
import { playerGrid, playerIdField } from '#db/const/player.db.const.js';

export const createHouseGrid = `
  CREATE TABLE IF NOT EXISTS ${houseGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    ${ownerIdField} INTEGER,
    
    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;

export const createHouse = `INSERT INTO ${houseGrid} (name, ${ownerIdField}) VALUES (@name, @${ownerIdField});`;
export const deleteHouse = `DELETE FROM ${houseGrid} WHERE ${idField} = @${houseIdField};`;

export const createHouseDesignJoinGrid = `
    CREATE TABLE IF NOT EXISTS ${houseJoinDesign} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${houseIdField}INTEGER NOT NULL,
      ${designIdField}INTEGER NOT NULL,

      FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
      FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField}),

      UNIQUE(${houseIdField}, ${designIdField})
    );
`;

export const createHousePlayerJoinGrid = `
    CREATE TABLE IF NOT EXISTS ${houseJoinPlayer} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${houseIdField}INTEGER NOT NULL,
      ${playerIdField} INTEGER NOT NULL,

      FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
      FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),

      UNIQUE(${houseIdField}, ${playerIdField})
    );
`;

export const connectHousePlayer = `
INSERT INTO ${houseJoinPlayer}
    (${houseIdField}, ${playerIdField})
    VALUES (@${houseIdField}, @${playerIdField});
`;

export const selectPlayersForHouseById = `
SELECT p.* FROM ${houseJoinPlayer} hp
    LEFT JOIN ${playerGrid} p on hp.${playerIdField} = p.${idField}
    WHERE hp.${houseIdField}= @${houseIdField};
`;
