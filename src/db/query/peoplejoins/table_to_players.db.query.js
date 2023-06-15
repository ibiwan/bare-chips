import { idField, playerIdField, tableIdField } from '#db/const/fields.db.const.js';
import { playerGrid, tableGrid } from '#db/const/grids.db.const.js';
import { tableJoinPlayers } from '#db/const/joins.db.const.js';

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
