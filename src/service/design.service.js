export const makeDesignService = ({ designRepo, chipService, playerService }) =>
  ({
    /**
     * @param {{name, chips}} data
     * @param {*} ownerId
     * @param {*} houseId
     */
    createDesign: (data, ownerId, houseId) => {
      const { chips, ...flatData } = data;

      const designData = { ...flatData, ownerId, houseId };
      const designId = designRepo.create(designData);

      chips.forEach((chip) =>
        chipService.createChip(chip, designId));

      return designRepo.getById(designId);
    },
    getDesignById: (id) =>
      designRepo.getById(id),
    getOwnerForDesign: (design) =>
      playerService.getPlayerById(design.ownerId),
    getChipsForDesign: (design) =>
      chipService.getChipsForDesign(design),
  });
