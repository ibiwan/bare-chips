import { loginRoute } from '#auth/route.login.js';

export const init = (app) => {
  loginRoute(app);
  // logout route
  // token refresh route
  app.get(
    '/',
    (
      req,
      res,
    ) => {
      res.send('hiya werlz');
    },
  );
};
