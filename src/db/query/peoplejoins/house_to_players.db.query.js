import { houseIdField, idField, playerIdField } from '#db/const/fields.db.const.js';
import { houseGrid, playerGrid } from '#db/const/grids.db.const.js';
import { houseJoinPlayer } from '#db/const/joins.db.const.js';

export const createHousePlayerJoinGrid = `--sql
    CREATE TABLE IF NOT EXISTS ${houseJoinPlayer} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${houseIdField}INTEGER NOT NULL,
      ${playerIdField} INTEGER NOT NULL,

      FOREIGN KEY (${houseIdField}) 
        REFERENCES ${houseGrid}(${idField}),
      FOREIGN KEY (${playerIdField}) 
        REFERENCES ${playerGrid}(${idField}),

      UNIQUE(${houseIdField}, ${playerIdField})
    );
`;

export const invitePlayerToHouse = `--sql
  INSERT INTO ${houseJoinPlayer}
    (${houseIdField}, ${playerIdField})
    VALUES (@${houseIdField}, @${playerIdField});
`;

export const selectPlayersForHouseById = `--sql
  SELECT p.* FROM ${houseJoinPlayer} hp
    LEFT JOIN ${playerGrid} p on hp.${playerIdField} = p.${idField}
    WHERE hp.${houseIdField}= @${houseIdField};
`;

export const selectHousesForPlayerById = `--sql
  SELECT h.* FROM ${houseJoinPlayer} hp
    LEFT JOIN ${houseGrid} h on hp.${houseIdField} = p.${idField}
    WHERE hp.${playerIdField}= @${playerIdField};
`;
