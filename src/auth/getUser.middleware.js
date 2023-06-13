export const getUser = (req, _res, next) => {
  const { context: { di: { authService } } } = req;

  if (req?.body?.operationName === 'IntrospectionQuery') {
    // console.log('schema update');
    next();
    return;
  }

  if (req?.originalUrl === '/auth/login') {
    // console.log('login');
    // next();
    // return;
  }

  const auth = req.header('Authorization');
  console.debug({ auth });
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
