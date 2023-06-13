import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

const jwtSigningSecret = 'I saw the sign it opened up my IZ';
const _jwtSymmetricSecret = 'I see what you see';

const commonAuthError = 'Could not authenticate.';
const throwAuth = (reason) => {
  console.error(`${commonAuthError}..${reason}`);
  throw new Error(commonAuthError);
};

export const makeAuthService = ({ playerService }) =>
  ({
    loginWithUsernamePassword: (username, password) => {
      const player = playerService.getPlayerByUsername(username) ?? throwAuth('no player for username');
      const passhash = player.passhash ?? throwAuth();
      const _valid = compareSync(password, passhash) || throwAuth();
      const token = jwt.sign(
        {
          username: player.username,
          sub: player.id,
        },
        jwtSigningSecret,
        { expiresIn: '5s' },
      );
      const { exp: expiry } = jwt.decode(token, { json: true });

      return { token, expiry };
    },
    validateJwtAuthHeader: (authHeader) => {
      const [bearer, token, ..._more] = authHeader.split(' ');
      if (bearer !== 'Bearer') throwAuth();

      let payload;
      try {
        payload = jwt.verify(token, jwtSigningSecret);
      } catch (e) { throwAuth(); }

      // @ts-ignore (username not in payload ts type)
      const { username, sub: playerId } = payload;
      const player = playerService.getPlayerById(playerId);
      if (player?.username !== username) throwAuth();

      return player;
    },
  });
