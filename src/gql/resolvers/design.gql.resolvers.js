export const designResolvers = {
  Query: {
    getAllDesigns: (_parent, _input, contextValue, _info) => {
      const { di: { designService }, authuser: _user } = contextValue;

      return designService.getAllDesigns();
    },
  },
  Mutation: {
    createDesign: (_parent, { createDesignInput }, contextValue, _info) => {
      const { di: { designService }, authuser, authuser: { id: ownerId } } = contextValue;
      console.log({ authuser, ownerId });

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
      console.log({ parent });
      return designService.getOwnerForDesign(parent);
    },
  },
};
