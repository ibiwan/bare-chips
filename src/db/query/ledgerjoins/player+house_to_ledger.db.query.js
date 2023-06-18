import {
  houseIdField, idField, ledgerIdField, playerIdField,
} from '#db/const/fields.db.const.js';
import { houseGrid, ledgerGrid, playerGrid } from '#db/const/grids.db.const.js';

export const playerJoinHouseJoinLedger = 'playerJoinHouseJoinLedger';
export const createPlayerHouseLedgerJoinGrid = `
  CREATE TABLE IF NOT EXISTS ${playerJoinHouseJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${playerIdField} INTEGER NOT NULL,
    ${houseIdField} INTEGER NOT NULL,
    ${ledgerIdField} INTEGER NOT NULL,

    FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),
    FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
    FOREIGN KEY (${ledgerIdField}) REFERENCES ${ledgerGrid}(${idField}),

    UNIQUE (${playerIdField}, ${houseIdField})
  );
`;

export const connectPlayerHouseLedger = `
INSERT INTO ${playerJoinHouseJoinLedger}
    (${houseIdField}, ${ledgerIdField})
    VALUES (@${houseIdField}, @${ledgerIdField});
`;
