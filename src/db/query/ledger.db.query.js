import { currencyIdField, idField } from '#db/const/fields.db.const.js';
import { currencyGrid, ledgerGrid } from '#db/const/grids.db.const.js';
import { usdIndex } from '#db/const/other.db.const.js';

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
