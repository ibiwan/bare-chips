export const makeTemplateService = ({ templateRepo }) =>
  ({
    getAllTemplates: () =>
      templateRepo.getAll(),
    getTemplateById: (id) =>
      templateRepo.getById(id),
    createTemplate: (ownerId, name) => {
      const newId = templateRepo.create(name, ownerId);
      const newTemplate = templateRepo.getById(newId);

      return newTemplate;
    },
  });
