export const authRouteString = 'auth/login';

export const loginRoute = (app) => {
  app.post(
    authRouteString,
    async (req, res, _next) => {
      const {
        context: { di },
        body: { username, password },
      } = req;

      const { token, expiry } = di.authService.loginWithUsernamePassword(username, password);

      res.send({ token, expiry });
    },
  );
};
