import { loginRoute } from "#auth/identity.js"

export const init = app => {
  loginRoute(app);
  app.get(
    '/',
    (req,
      res) => {
      res.send('hiya werlz')
    }
  )
}