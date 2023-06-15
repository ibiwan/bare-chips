import { createDesignGrid } from '#db/query/design.db.query.js';
import { createLedgerGrid } from '#db/query/ledger.db.query.js';
import { createPlayerGrid } from '#db/query/player.db.query.js';
import { createChipGrid } from '#db/query/chip.db.query.js';
import { createHouseGrid } from '#db/query/house.db.query.js';
import { createGameGrid } from '#db/query/game.db.query.js';
import { createTableGrid } from '#db/query/table.db.query.js';
import { createTableJoinHouseJoinLedgerGrid } from '#db/query/ledgerjoins/table+house_to_ledger.db.query.js';
import { createPlayerTableLedgerJoinGrid } from '#db/query/ledgerjoins/player+table_to_ledger.db.query.js';
import { createPlayerHouseLedgerJoinGrid } from '#db/query/ledgerjoins/player+house_to_ledger.db.query.js';
import { createTablePlayerJoinGrid } from '#db/query/peoplejoins/table_to_players.db.query.js';
import { createTableBossJoinGrid } from '#db/query/peoplejoins/table_to_boss.db.query.js';
import { createHouseLedgerJoinGrid } from '#db/query/ledgerjoins/house_to_ledger.db.query.js';
import { createHouseDesignJoinGrid } from '#db/query/otherjoins/house_to_design.db.query.js';
import { createHousePlayerJoinGrid } from '#db/query/peoplejoins/house_to_players.db.query.js';
import { createGameDealerJoinGrid } from '#db/query/peoplejoins/game_to_dealers.db.query.js';
import { createGamePlayerJoinGrid } from '#db/query/peoplejoins/game_to_players.db.query.js';
import { createCurrencyGrid } from '#db/query/currency.db.query.js';

export const schemae = [
  createCurrencyGrid,
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
  createHouseLedgerJoinGrid,
  createHouseDesignJoinGrid,
  createHousePlayerJoinGrid,
  createGameDealerJoinGrid,
  createGamePlayerJoinGrid,
  createTableBossJoinGrid,
];
