export const loginRoute = app => {
  app.post(
    '/auth/login',
    (req, res) => {
      console.log("login")
      res.send({ message: `you're good`, access_token: 'pretend', expiry: 99999 })
    }
  )
}

export const getUser = (
  req, _res, next
) => {
  const _auth = req.header('Authorization')

  req.context = {
    ...req.context,
    authuser: { id: 1, username: "casper" }
  }

  next()
}
