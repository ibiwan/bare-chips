export const makeHouseService = (
  { houseRepo, playerRepo },
) =>
  ({
    getAllHouses: (ownerId) =>
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
    deleteHouse: (houseId, _ownerId) =>
      houseRepo.deleteById(houseId),
    getOwner: (house) =>
      playerRepo.getById(house.ownerId),
  });
