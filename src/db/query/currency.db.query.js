import { currencyGrid, usdIndex } from '#db/const/currency.db.const.js';
import { idField } from '#db/const/_common.db.const.js';

export const createCurrencyGrid = `
  CREATE TABLE IF NOT EXISTS ${currencyGrid} (
    ${idField} INTEGER PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    main TEXT NOT NULL,
    frac TEXT,
    ratio INTEGER,
    UNIQUE (code)
);`;

export const populateCurrencyGrid = `
  INSERT INTO ${currencyGrid}
    (${idField}, code, main, frac, ratio)
    VALUE (${usdIndex}, 'USD', 'Dollars', 'Cents', 100);
`;
