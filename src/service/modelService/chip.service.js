export const makeChipService = ({
  chipRepo,
}) =>
  ({
    getChipById: (chipId) =>
      chipRepo.getById(chipId),
    getChipsForDesign: (design) =>
      chipRepo.getByDesignId(design.id),
    /**
       * @param {{color, value}} data
       * @param {*} designId
       */
    createChip: (data, designId) => {
      const chipId = chipRepo.create({ ...data, designId });
      return chipRepo.getById(chipId);
    },
  });
