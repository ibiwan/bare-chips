// import {
//   connectHousePlayer, createHouse, deleteHouse, selectHouseById, selectPlayersForHouseById,
// } from '../house/repo.js';

// export const hostFlows = (db) => ({
//   createHouse: (actorId, name) => {
//     const result = db.prepare(createHouse).run({ name, ownerId: actorId });
//     return db.prepare(selectHouseById).get({ id: result.lastInsertRowid });
//   },
//   getHouseById: (houseId) => db.prepare(selectHouseById).get({ id: houseId }),
//   deleteHouse: (houseId) => {
//     console.log(deleteHouse, { houseId });
//     const result = db.prepare(deleteHouse).run({ houseId });
//     console.log({ result });

//     return true;
//   },
//   invitePlayerToHouse: (actorId, playerId, houseId) => {
//     const _playerHouseResult = db.prepare(connectHousePlayer).run({ playerId, houseId });
//     return db.prepare(selectPlayersForHouseById).all({ houseId });
//   },
//   createGrid: (_actorId, _houseId, _name, _opts) => { /* opts: number seats, pit boss */ },
//   addDesignToCatalog: (_actorId, _designId, _houseId) => { },
//   removeDesignFromCatalog: (_actorId, _designId, _houseId) => { },
//   kickPlayerFromHouse: (_actorId, _playerid, _houseId) => { },
//   banPlayerFromHouse: (_actorId, _playerid, _houseId) => { },
//   freezeHouse: (_actorId, _houseId) => { },
//   thawHouse: (_actorId, _houseId) => { },
//   closeHouse: (_actorId, _houseId) => { },
//   banDesignFromCatalog: (_actorId, _designId, _houseId) => { },
// });

export const makeHostService = ({ playerRepo, houseRepo }) =>
  ({
  // createHouse: (ownerId, name) => {
  //   // const result =
  //   console.log({ ownerId, name, playerRepo })
  // },
    invitePlayerToHouse: (actorId, playerId, houseId) => {
      const _playerHouseResult = db.prepare(connectHousePlayer).run({ playerId, houseId });
      return db.prepare(selectPlayersForHouseById).all({ houseId });
    },

  });
