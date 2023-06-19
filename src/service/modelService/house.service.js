export const makeHouseService = (
  { houseRepo, playerRepo },
) =>
  ({
    getAllHouses: (ownerId) =>
      houseRepo.getAll().filter((house) =>
        house.ownerId === ownerId),
    getHouseById: (houseId) =>
      houseRepo.getById(houseId),
    getOwner: (house) =>
      playerRepo.getById(house.ownerId),
  });
