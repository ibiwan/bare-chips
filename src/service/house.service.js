import { throwDNE } from '#util/exceptions.js';

export const makeHouseService = (
  { houseRepo, playerRepo },
) =>
  ({
    allHouses: (ownerId) =>
      houseRepo.getAll().filter((house) =>
        house.ownerId === ownerId),
    /**
      * @param {{name}} data
      * @param {*} ownerId
      */
    createHouse: (data, ownerId) => {
      const newId = houseRepo.create({ ...data, ownerId });
      const newHouse = houseRepo.getById(newId);

      return newHouse;
    },
    deleteHouse: (houseId, _ownerId) => {
      const house = houseRepo.getById(houseId) ?? throwDNE('house', houseId);
      const _result = houseRepo.deleteById(houseId);
      return house;
    },
    getOwner: (house) =>
      playerRepo.getById(house.ownerId),
  });
