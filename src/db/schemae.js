import { createDesignGrid } from '#db/query/design.db.query.js';
import {
  createTableJoinHouseJoinLedgerGrid,
  createPlayerTableLedgerJoinGrid,
  createPlayerHouseLedgerJoinGrid,
  createHouseLedgerJoinGrid,
  createLedgerGrid,
} from '#db/query/ledger.db.query.js';
import { createPlayerGrid } from '#db/query/player.db.query.js';

import { createChipGrid } from '#db/query/chip.db.query.js';

import {
  createHouseDesignJoinGrid,
  createHousePlayerJoinGrid,
  createHouseGrid,
} from '#db/query/house.db.query.js';

import {
  createGameDealerJoinGrid,
  createGamePlayerJoinGrid,
  createGameGrid,
} from '#db/query/game.db.query.js';
import {
  createTablePlayerJoinGrid,
  createTableBossJoinGrid,
  createTableGrid,
} from '#db/query/table.db.query.js';

export const schemae = [
  createDesignGrid,
  createLedgerGrid,
  createPlayerGrid,
  createTableGrid,
  createHouseGrid,
  createGameGrid,
  createChipGrid,

  createTableJoinHouseJoinLedgerGrid,
  createPlayerTableLedgerJoinGrid,
  createPlayerHouseLedgerJoinGrid,
  createTablePlayerJoinGrid,
  createTableBossJoinGrid,
  createHouseLedgerJoinGrid,
  createHouseDesignJoinGrid,
  createHousePlayerJoinGrid,
  createGameDealerJoinGrid,
  createGamePlayerJoinGrid,
];
