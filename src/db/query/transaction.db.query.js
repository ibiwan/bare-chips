import { idField } from '#db/const/_common.db.const.js';
import { ledgerGrid } from '#db/const/ledger.db.const.js';
import {
  amountField, descField, fromLedgerIdField, toLedgerIdField, transactionGrid,
} from '../const/transaction.db.const.js';

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
