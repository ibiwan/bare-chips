import {
  selectAll, selectBy,
} from '#db/query/_common.db.const.js';
import { idField, ownerIdField } from '#db/const/_common.db.const.js';

import {
  tableGrid, tableIdField, tableJoinBoss, tableJoinPlayers,
  activeGameIdField, bossIdField,
} from '#db/const/table.db.const.js';
import { designIdField, designGrid } from '#db/const/design.db.const.js';
import { playerGrid, playerIdField } from '#db/const/player.db.const.js';
import { gameGrid } from '#db/const/game.db.const.js';

export const selectAllTables = selectAll(tableGrid);
export const selectTableById = selectBy(tableGrid, idField);
export const selectTablesByOwnerId = selectBy(tableGrid, ownerIdField);

export const createTableGrid = `
  CREATE TABLE IF NOT EXISTS ${tableGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${designIdField}INTEGER,
    ${activeGameIdField} INTEGER,
    ${ownerIdField} INTEGER,

    FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField}),
    FOREIGN KEY (${activeGameIdField}) REFERENCES ${gameGrid}(${idField}),
    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField})
  );`;

export const createTableBossJoinGrid = `
    CREATE TABLE IF NOT EXISTS ${tableJoinBoss} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${tableIdField} INTEGER NOT NULL,
      ${bossIdField} INTEGER NOT NULL,

      FOREIGN KEY (${tableIdField}) REFERENCES ${tableGrid}(${idField}),
      FOREIGN KEY (${bossIdField}) REFERENCES ${playerGrid}(${idField})

      UNIQUE(${tableIdField})
    );
`;

export const createTablePlayerJoinGrid = `
CREATE TABLE IF NOT EXISTS ${tableJoinPlayers} (
  ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
  ${tableIdField} INTEGER NOT NULL,
  ${playerIdField} INTEGER NOT NULL,

  FOREIGN KEY (${tableIdField}) REFERENCES ${tableGrid}(${idField}),
  FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),

  UNIQUE(${tableIdField}, ${playerIdField})
);
`;
