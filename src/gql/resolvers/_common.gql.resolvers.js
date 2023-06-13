export const metaResolver = (undi) =>
  (wrappee) =>
    (parent, input, contextValue, info) => {
      const { di, authuser } = contextValue;
      const oneArg = {
        parent,
        input,
        di,
        ...undi(di),
        authuser,
        info,
      };
      return wrappee(oneArg);
    };
