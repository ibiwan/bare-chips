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
      console.log({ designData });
      const designId = designRepo.create(designData);
      chips.forEach((chip) => {
        console.log({ chip });
        return chipService.createChip(chip, designId);
      });
      return designRepo.getById(designId);
    },
    getDesignById: (id) =>
      designRepo.getById(id),
    getOwnerForDesign: (design) =>
      playerService.getPlayerById(design.ownerId),
    getChipsForDesign: (design) =>
      chipService.getChipsForDesign(design),
  });

// const result = db.prepare(createChip).run({ ...input.createChipInput, ownerId });
// const { chips, ...flatDesignInputs } = input.createDesignInput;

// chips.foreach((createChipInput) => {
//   db.prepare(createChip).run({ ...createChipInput, designId: newDesignId, ownerId });
// });
// return db.prepare(selectChipById).get({ id: result.lastInsertRowid });
