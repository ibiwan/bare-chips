import { idField } from '#db/const/_common.db.const.js';

import { currencyGrid, currencyIdField, usdIndex } from '#db/const/currency.db.const.js';
import { tableGrid, tableIdField } from '#db/const/table.db.const.js';
import { ledgerGrid, ledgerIdField } from '#db/const/ledger.db.const.js';
import { playerIdField, playerGrid } from '#db/const/player.db.const.js';
import { houseGrid, houseIdField } from '#db/const/house.db.const.js';

export const createLedgerGrid = `
  CREATE TABLE IF NOT EXISTS ${ledgerGrid} (
    ${idField} INTEGER PRIMARY KEY,
    balance INTEGER NOT NULL DEFAULT 0,
    ${currencyIdField} INTEGER NOT NULL DEFAULT ${usdIndex},
    desc TEXT,

    FOREIGN KEY (${currencyIdField}) REFERENCES ${currencyGrid}(${idField})
);`;

export const createLedger = `
INSERT INTO ${ledgerGrid} 
  (desc) 
  VALUES (@desc);
`;

// house to ledger
export const houseJoinLedger = 'houseJoinLedger';
export const createHouseLedgerJoinGrid = `
  CREATE TABLE IF NOT EXISTS ${houseJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${houseIdField}INTEGER NOT NULL,
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

// player+house ledger
export const playerJoinHouseJoinLedger = 'playerJoinHouseJoinLedger';
export const createPlayerHouseLedgerJoinGrid = `
  CREATE TABLE IF NOT EXISTS ${playerJoinHouseJoinLedger} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${playerIdField} INTEGER NOT NULL,
    ${houseIdField}INTEGER NOT NULL,
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
