import awilix from 'awilix';

import {
  makeAuthService,
  makeDbService,
  makeEmailService,
} from '#service/utilService/index.js';

import {
  makeBossService,
  makeChipService,
  makeCurrencyService,
  makeDealerService,
  makeDesignService,
  makeGameService,
  makeHostService,
  makeHouseService,
  makeLedgerService,
  makePlayerService,
  makeSessionService,
  makeTableService,
  makeTransactionService,
} from '#service/modelService/index.js';

import {
  makeChipRepo,
  makeCurrencyRepo,
  makeDesignRepo,
  makeGameRepo,
  makeHouseRepo,
  makeLedgerRepo,
  makePlayerRepo,
  makeSessionRepo,
  makeTableRepo,
  makeTransactionRepo,
} from '#db/repo/index.js';

import { objectMap } from '#util/objectMap.js';

const modelRepos = {
  chipRepo: makeChipRepo,
  currencyRepo: makeCurrencyRepo,
  designRepo: makeDesignRepo,
  gameRepo: makeGameRepo,
  houseRepo: makeHouseRepo,
  ledgerRepo: makeLedgerRepo,
  playerRepo: makePlayerRepo,
  sessionRepo: makeSessionRepo,
  tableRepo: makeTableRepo,
  transactionRepo: makeTransactionRepo,
};

const modelServices = {
  chipService: makeChipService,
  currencyService: makeCurrencyService,
  designService: makeDesignService,
  gameService: makeGameService,
  houseService: makeHouseService,
  ledgerService: makeLedgerService,
  playerService: makePlayerService,
  dealerService: makeDealerService,
  bossService: makeBossService,
  hostService: makeHostService,
  sessionService: makeSessionService,
  tableService: makeTableService,
  transactionService: makeTransactionService,
};

const utilServices = {
  emailService: makeEmailService,
  authService: makeAuthService,
  dbService: makeDbService,
};

const config = objectMap({
  ...modelRepos,
  ...modelServices,
  ...utilServices,
}, ([key, factory]) =>
  ([key, awilix.asFunction(factory).singleton()]));

const makeContainer = () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  container.register(config);

  return container;
};

const container = makeContainer();

export const diMiddleware = (req, _res, next) => {
  req.context = { ...req.context, di: container.cradle };

  next();
};
