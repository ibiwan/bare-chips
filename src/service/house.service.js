export const makeHouseService = (
  { houseRepo, playerRepo },
) =>
  ({
    getAllHouses: (ownerId) =>
      houseRepo.getAll().filter((house) =>
        house.ownerId === ownerId),
    getOwner: (house) =>
      playerRepo.getById(house.ownerId),
  });
