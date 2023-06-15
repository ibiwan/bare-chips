import { idField } from '#db/const/_common.db.const.js';
import { fromLedgerIdField, ledgerGrid, toLedgerIdField } from '#db/const/ledger.db.const.js';
import { amountField, descField, transactionGrid } from '#db/const/transaction.db.const.js';

export const createTransactionGrid = `
CREATE TABLE IF NOT EXISTS ${transactionGrid} (
  ${idField} INTEGER PRIMARY KEY,
  ${fromLedgerIdField} INTEGER,
  ${toLedgerIdField} INTEGER,
  ${amountField} INTEGER,
  ${descField} TEXT,

  FOREIGN KEY (${fromLedgerIdField}) REFERENCES ${ledgerGrid}(${idField})
  FOREIGN KEY (${toLedgerIdField}) REFERENCES ${ledgerGrid}(${idField})
);`;
