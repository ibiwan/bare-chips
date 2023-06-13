import {
  dealerIdField, gameGrid, gameIdField, gameJoinDealer, gameJoinPlayers,
} from '#db/const/game.db.const.js';
import { playerGrid, playerIdField } from '#db/const/player.db.const.js';
import { idField, ownerIdField } from '#db/const/_common.db.const.js';

export const createGameGrid = `
  CREATE TABLE IF NOT EXISTS ${gameGrid} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT UNIQUE,
    ${gameIdField} INTEGER,
    ${ownerIdField} INTEGER,

    FOREIGN KEY (${ownerIdField}) REFERENCES ${playerGrid}(${idField}),
    FOREIGN KEY (${gameIdField}) REFERENCES ${gameGrid}(${idField})
  );`;

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

export const createGamePlayerJoinGrid = `
CREATE TABLE IF NOT EXISTS ${gameJoinPlayers} (
  ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
  ${gameIdField} INTEGER NOT NULL,
  ${playerIdField} INTEGER NOT NULL,

  FOREIGN KEY (${gameIdField}) REFERENCES ${gameGrid}(${idField}),
  FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),

  UNIQUE(${gameIdField}, ${playerIdField})
);
`;
