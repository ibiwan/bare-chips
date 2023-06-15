import {
  houseIdField, idField, ledgerIdField, playerIdField, tableIdField,
} from '#db/const/fields.db.const.js';
import { ledgerGrid, playerGrid, tableGrid } from '#db/const/grids.db.const.js';

// player+table
export const playerJoinTableJoinLedger = 'playerJoinTableJoinLedger';
export const createPlayerTableLedgerJoinGrid = `
  CREATE TABLE IF NOT EXISTS ${playerJoinTableJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${playerIdField} INTEGER NOT NULL,
    ${tableIdField} INTEGER NOT NULL,
    ${ledgerIdField} INTEGER NOT NULL,

    FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),
    FOREIGN KEY (${tableIdField}) REFERENCES ${tableGrid}(${idField}),
    FOREIGN KEY (${ledgerIdField}) REFERENCES ${ledgerGrid}(${idField}),

    UNIQUE (${playerIdField}, ${tableIdField})
  );
`;

export const connectPlayerTableLedger = `
INSERT INTO ${playerJoinTableJoinLedger}
    (${houseIdField}, ${ledgerIdField})
    VALUES (@${houseIdField}, @${ledgerIdField});
`;
