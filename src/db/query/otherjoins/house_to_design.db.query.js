import { designIdField, houseIdField, idField } from '#db/const/fields.db.const.js';
import { designGrid, houseGrid } from '#db/const/grids.db.const.js';
import { houseJoinDesign } from '#db/const/joins.db.const.js';

export const createHouseDesignJoinGrid = `
    CREATE TABLE IF NOT EXISTS ${houseJoinDesign} (
      ${idField} INTEGER PRIMARY KEY AUTOINCREMENT,
      ${houseIdField} INTEGER NOT NULL,
      ${designIdField} INTEGER NOT NULL,

      FOREIGN KEY (${houseIdField}) REFERENCES ${houseGrid}(${idField}),
      FOREIGN KEY (${designIdField}) REFERENCES ${designGrid}(${idField}),

      UNIQUE(${houseIdField}, ${designIdField})
    );
`;
