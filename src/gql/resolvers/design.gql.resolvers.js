export const designResolvers = {
  Query: {
    getAllDesigns: (_parent, _input, contextValue, _info) => {
      const { di: { designService }, authuser: _user } = contextValue;
      return designService.getAllDesigns();
    },
  },
  Mutation: {
    createDesign: (_parent, { createDesignInput }, contextValue, _info) => {
      const { di: { designService }, authuser: { id: ownerId } } = contextValue;
      return designService.createDesign(createDesignInput, ownerId);
    },
  },
  Design: {
    chips: (parent, _input, contextValue, _info) => {
      const { di: { designService }, authuser: _user } = contextValue;
      return designService.getChipsForDesign(parent);
    },
    owner: (parent, _input, contextValue, _info) => {
      const { di: { designService }, authuser: _user } = contextValue;
      return designService.getOwnerForDesign(parent);
    },
  },
};
