//   createTable: (_actorId, _houseId, _name, _opts) => { /* opts: number seats, pit boss */ },
//   addDesignToCatalog: (_actorId, _designId, _houseId) => { },
//   removeDesignFromCatalog: (_actorId, _designId, _houseId) => { },
//   kickPlayerFromHouse: (_actorId, _playerid, _houseId) => { },
//   banPlayerFromHouse: (_actorId, _playerid, _houseId) => { },
//   freezeHouse: (_actorId, _houseId) => { },
//   thawHouse: (_actorId, _houseId) => { },
//   closeHouse: (_actorId, _houseId) => { },
//   banDesignFromCatalog: (_actorId, _designId, _houseId) => { },
// });

export const makeHostService = ({ playerRepo: _playerRepo, houseRepo }) =>
  ({
    /**
      * @param {{name}} data
      * @param {*} ownerId
      */
    createHouse: (data, ownerId) => {
      console.log('house.service.createHouse', { data });
      const newId = houseRepo.create({ ...data, ownerId });
      const newHouse = houseRepo.getById(newId);

      return newHouse;
    },
    deleteHouse: (houseId, _ownerId) =>
      houseRepo.deleteById(houseId),
    invitePlayerToHouse: ({ actorId: _actorId, playerId, houseId }) =>
      houseRepo.invitePlayer({ playerId, houseId }),
  });
