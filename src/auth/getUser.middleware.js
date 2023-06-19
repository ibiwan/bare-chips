import { authRouteString } from './route.login.js';

export const getUser = (req, _res, next) => {
  const { context: { di: { authService } } } = req;

  if (req?.body?.operationName === 'IntrospectionQuery') {
    next(); return;
  }

  if (req?.originalUrl === authRouteString) {
    next(); return;
  }

  const auth = req.header('Authorization');
  if (!auth) {
    console.info('no auth header; not injecting user');
    next(); return;
  }

  try {
    console.debug(auth.substring(0, 20));
    req.context.authuser = authService.validateJwtAuthHeader(auth);
  } catch (e) {
    console.error('not injecting user because of exception');
    throw e;
  }

  next();
};
