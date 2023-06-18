import { houseIdField, idField, ledgerIdField } from '#db/const/fields.db.const.js';
import { houseGrid, ledgerGrid } from '#db/const/grids.db.const.js';
import { houseJoinLedger } from '#db/const/joins.db.const.js';

export const createHouseLedgerJoinGrid = `
  CREATE TABLE IF NOT EXISTS ${houseJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${houseIdField} INTEGER NOT NULL,
    ${ledgerIdField} INTEGER NOT NULL,

    FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
    FOREIGN KEY (${ledgerIdField}) REFERENCES ${ledgerGrid}(${idField}),

    UNIQUE (${houseIdField})
  );
`;

export const connectHouseLedger = `
INSERT INTO ${houseJoinLedger}
    (${houseIdField}, ${ledgerIdField})
    VALUES (@${houseIdField}, @${ledgerIdField});
`;
