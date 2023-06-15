import { gameIdField, idField, playerIdField } from '#db/const/fields.db.const.js';
import { gameGrid, playerGrid } from '#db/const/grids.db.const.js';
import { gameJoinPlayers } from '#db/const/joins.db.const.js';

export const createGamePlayerJoinGrid = `--sql
  CREATE TABLE IF NOT EXISTS ${gameJoinPlayers} (
    ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${gameIdField} INTEGER NOT NULL,
    ${playerIdField} INTEGER NOT NULL,

    FOREIGN KEY (${gameIdField}) REFERENCES ${gameGrid}(${idField}),
    FOREIGN KEY (${playerIdField}) REFERENCES ${playerGrid}(${idField}),

    UNIQUE(${gameIdField}, ${playerIdField})
  );
`;
