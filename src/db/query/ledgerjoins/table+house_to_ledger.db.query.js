import {
  houseIdField, idField, ledgerIdField, tableIdField,
} from '#db/const/fields.db.const.js';
import { houseGrid, ledgerGrid, tableGrid } from '#db/const/grids.db.const.js';

// table+house to ledger
export const tableJoinHouseJoinLedger = 'tableJoinHouseJoinLedger';
export const createTableJoinHouseJoinLedgerGrid = `
  CREATE TABLE IF NOT EXISTS ${tableJoinHouseJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${tableIdField} INTEGER NOT NULL,
    ${houseIdField}INTEGER NOT NULL,
    ${ledgerIdField} INTEGER NOT NULL,

    FOREIGN KEY (${tableIdField}) REFERENCES ${tableGrid}(${idField}),
    FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
    FOREIGN KEY (${ledgerIdField}) REFERENCES ${ledgerGrid}(${idField}),

    UNIQUE (${tableIdField}, ${houseIdField})
  );
`;

export const connectTableHouseLedger = `
INSERT INTO ${tableJoinHouseJoinLedger}
    (${tableIdField}, ${houseIdField}, ${ledgerIdField})
    VALUES (@${tableIdField}, @${houseIdField}, @${ledgerIdField});
`;
