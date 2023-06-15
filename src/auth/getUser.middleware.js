export const getUser = (req, _res, next) => {
  const { context: { di: { authService } } } = req;

  if (req?.body?.operationName === 'IntrospectionQuery') {
    next();
    return;
  }

  const url = req?.originalUrl;
  const isLogin = url === '/auth/login';
  const auth = req.header('Authorization');

  if (isLogin) {
    next();
    return;
  }
  console.debug({ auth });

  if (!auth) {
    console.info('no auth header; not injecting user');
    next();
    return;
  }

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

  next();
};
