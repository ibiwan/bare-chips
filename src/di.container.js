import awilix from 'awilix';

import { makeChipRepo } from '#db/repo/chip.repo.js';
import { makeCurrencyRepo } from '#db/repo/currency.repo.js';
import { makeDesignRepo } from '#db/repo/design.repo.js';
import { makeGameRepo } from '#db/repo/game.repo.js';
import { makeHouseRepo } from '#db/repo/house.repo.js';
import { makeLedgerRepo } from '#db/repo/ledger.repo.js';
import { makePlayerRepo } from '#db/repo/player.repo.js';
import { makeSessionRepo } from '#db/repo/session.repo.js';
import { makeTableRepo } from '#db/repo/table.repo.js';
import { makeTransactionRepo } from '#db/repo/transaction.repo.js';

import { makeAuthService } from '#service/auth.service.js';
import { makeBossService } from '#service/boss.service.js';
import { makeChipService } from '#service/chip.service.js';
import { makeCurrencyService } from '#service/currency.service.js';
import { makeDbService } from '#service/db.service.js';
import { makeDealerService } from '#service/dealer.service.js';
import { makeDesignService } from '#service/design.service.js';
import { makeGameService } from '#service/game.service.js';
import { makeHostService } from '#service/host.service.js';
import { makeHouseService } from '#service/house.service.js';
import { makeLedgerService } from '#service/ledger.service.js';
import { makePlayerService } from '#service/player.service.js';
import { makeSessionService } from '#service/session.service.js';
import { makeTableService } from '#service/table.service.js';
import { makeTransactionService } from '#service/transaction.service.js';

const makeContainer = () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  container.register({
    dbService: awilix.asFunction(makeDbService).singleton(),
    authService: awilix.asFunction(makeAuthService).singleton(),

    chipRepo: awilix.asFunction(makeChipRepo).singleton(),
    chipService: awilix.asFunction(makeChipService).singleton(),

    currencyRepo: awilix.asFunction(makeCurrencyRepo).singleton(),
    currencyService: awilix.asFunction(makeCurrencyService).singleton(),

    designRepo: awilix.asFunction(makeDesignRepo).singleton(),
    designService: awilix.asFunction(makeDesignService).singleton(),

    gameRepo: awilix.asFunction(makeGameRepo).singleton(),
    gameService: awilix.asFunction(makeGameService).singleton(),

    houseRepo: awilix.asFunction(makeHouseRepo).singleton(),
    houseService: awilix.asFunction(makeHouseService).singleton(),

    ledgerRepo: awilix.asFunction(makeLedgerRepo).singleton(),
    ledgerService: awilix.asFunction(makeLedgerService).singleton(),

    playerRepo: awilix.asFunction(makePlayerRepo).singleton(),
    playerService: awilix.asFunction(makePlayerService).singleton(),
    bossService: awilix.asFunction(makeBossService).singleton(),
    dealerService: awilix.asFunction(makeDealerService).singleton(),
    hostService: awilix.asFunction(makeHostService).singleton(),

    sessionRepo: awilix.asFunction(makeSessionRepo).singleton(),
    sessionService: awilix.asFunction(makeSessionService).singleton(),

    tableRepo: awilix.asFunction(makeTableRepo).singleton(),
    tableService: awilix.asFunction(makeTableService).singleton(),

    transactionRepo: awilix.asFunction(makeTransactionRepo).singleton(),
    transactionService: awilix.asFunction(makeTransactionService).singleton(),
  });

  return container;
};

const container = makeContainer();

export const diMiddleware = (req, _res, next) => {
  req.context = { ...req.context, di: container.cradle };

  next();
};
