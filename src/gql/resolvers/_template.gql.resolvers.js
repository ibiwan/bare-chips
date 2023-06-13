import { metaResolver } from '#gql/resolvers/_common.gql.resolvers.js';

const mr = metaResolver(({ templateService }) =>
  ({ templateService }));

export const resolvers = {
  Query: {
    getAllTemplates: mr(({ templateService }) =>
      templateService.getAllTemplates()),
    getTemplateById: mr(({ templateService, input: { id } }) =>
      templateService.getTemplateById(id)),
  },
  Mutation: {
    createTemplate: mr(({ templateService, input: { createTemplateInput }, authUser: { id } }) =>
      templateService.createChip({ ...createTemplateInput, ownerId: id })),
  },
  Template: {
    relation: mr(({ templateService, parent }) =>
      templateService.getRelationForTemplate(parent)),
    owner: mr(({ templateService, parent }) =>
      templateService.getOwner(parent)),
  },
};
