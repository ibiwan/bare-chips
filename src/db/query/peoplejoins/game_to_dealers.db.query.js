import { dealerIdField, gameIdField, idField } from '#db/const/fields.db.const.js';
import { gameGrid, playerGrid } from '#db/const/grids.db.const.js';
import { gameJoinDealer } from '#db/const/joins.db.const.js';

export const createGameDealerJoinGrid = `
    CREATE TABLE IF NOT EXISTS ${gameJoinDealer} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${gameIdField} INTEGER NOT NULL,
      ${dealerIdField} INTEGER NOT NULL,

      FOREIGN KEY (${gameIdField}) REFERENCES ${gameGrid}(${idField}),
      FOREIGN KEY (${dealerIdField}) REFERENCES ${playerGrid}(${idField}),

      UNIQUE(${gameIdField})
    );
`;
