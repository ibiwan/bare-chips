export const getUser = (req, _res, next) => {
  const { context: { di: { authService } } } = req;

  if (req?.body?.operationName === 'IntrospectionQuery') {
    next();
    return;
  }

  const auth = req.header('Authorization');
  if (auth) {
    try {
      const authuser = authService.validateJwtAuthHeader(auth);
      req.context = {
        ...req.context,
        authuser,
      };
    } catch (e) {
      console.error('not injecting user because of exception');
      throw e;
    }
  } else {
    console.info('no auth header; not injecting user');
  }

  next();
};
