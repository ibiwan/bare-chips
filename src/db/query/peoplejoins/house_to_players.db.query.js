import {
  houseIdField, idField, playerIdField, statusField,
} from '#db/const/fields.db.const.js';
import { houseGrid, playerGrid } from '#db/const/grids.db.const.js';
import { houseJoinPlayer } from '#db/const/joins.db.const.js';

export const createHousePlayerJoinGrid = `--sql
    CREATE TABLE IF NOT EXISTS ${houseJoinPlayer} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${houseIdField} INTEGER NOT NULL,
      ${playerIdField} INTEGER NOT NULL,
      ${statusField} TEXT NOT NULL,

      FOREIGN KEY (${houseIdField}) 
        REFERENCES ${houseGrid}(${idField}),
      FOREIGN KEY (${playerIdField}) 
        REFERENCES ${playerGrid}(${idField}),

      UNIQUE(${houseIdField}, ${playerIdField})
    );
`;

export const createPlayerHouseLink = `--sql
  INSERT INTO ${houseJoinPlayer}
    (${houseIdField}, ${playerIdField}, ${statusField})
    VALUES (@${houseIdField}, @${playerIdField}, @${statusField});
`;

export const selectPlayerHouseLinksByHouseId = `--sql
  SELECT hp.* FROM ${houseJoinPlayer} hp
    WHERE hp.${houseIdField}= @${houseIdField};
`;

export const selectPlayerHouseLinksByPlayerId = `--sql
  SELECT hp.* FROM ${houseJoinPlayer} hp
    WHERE hp.${playerIdField}= @${playerIdField};
`;

export const deletePlayerLinksForHouseId = `--sql
  DELETE FROM ${houseJoinPlayer} WHERE ${houseIdField} = @${houseIdField};
`;
