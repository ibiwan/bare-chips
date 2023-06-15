import { bossIdField, idField, tableIdField } from '#db/const/fields.db.const.js';
import { playerGrid, tableGrid } from '#db/const/grids.db.const.js';
import { tableJoinBoss } from '#db/const/joins.db.const.js';

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
