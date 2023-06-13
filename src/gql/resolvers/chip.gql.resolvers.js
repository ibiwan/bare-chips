import { metaResolver } from '#gql/resolvers/_common.gql.resolvers.js';

const mr = metaResolver(({ chipService }) =>
  ({ chipService }));

export const chipResolvers = {
  Query: {
    getAllChips: mr(({ chipService }) =>
      chipService.getAllChips()),
    getChipById: mr(({ chipService, input: { id } }) =>
      chipService.getChipById(id)),
  },
  Mutation: {
    createChip: mr(({ chipService, input: { createChipInput }, authUser: { id } }) =>
      chipService.create({ ...createChipInput, ownerId: id })),
  },
  Chip: {
    design: mr(({ chipService, parent }) =>
      chipService.getDesignForChip(parent)),
    owner: mr(({ chipService, parent }) =>
      chipService.getOwner(parent)),
  },
};
