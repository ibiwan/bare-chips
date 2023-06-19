// import { hashSync } from 'bcrypt';
// import { createPlayer, selectPlayerById } from './repo.js';

import { hashSync } from 'bcrypt';

// export const playerFlows = (db) => ({
//   createPlayer: (username, password) => {
// const passhash = hashSync(password, 14);
// const result = db.prepare(createPlayer).run({ username, passhash });

// return db.prepare(selectPlayerById).get({ id: result.lastInsertRowid });

// create as invalid
// send email verification token, save in player table
//   },
//   getPlayerById: (playerId) => db.prepare(selectPlayerById).get({ id: playerId }),
//   signIn: (_username, _password) => {
//     // return short-term token or add to session table
//   },
//   acceptHouseInvite: (_token) => {
//     // mark player-house join "active"
//     // create player-house acct
//   },
//   approachGrid: (_tableId) => {
//     // create player-table join as "request"
//   },
//   acceptTableInvite: (_tableId) => {
//     // mark player-table join "active"
//     // create player-table acct
//   },
//   ante: (gameId, _amount = null) => { },
//   fold: (_gameId) => { },
//   createDesign: (_name, _chips) => { },

//   validateEmail: (_token) => {
//     // mark player row valid
//     // create player ledger
//   },
//   signOut: (_username, _token) => {
//     // nothing, or end session in table
//   },
//   changePassword: (_username, _oldPassword, _newPassword) => {
//     // update player table with new hash
//   },
//   startForgotPassword: (_username) => {
//     // send email token, save in player table
//     // distinguishable from email validation token
//   },
//   finishForgotPassword: (_token, _newPassword) => {
//     // clear token, set new hash to player
//   },
//   leaveHouse: (_houseId) => {
//     // check if player-house ledger is even/empty
//     // mark player-house join "inactive"
//     // mark player-house acct "locked"
//   },
//   leaveGrid: (_tableId) => {
//     // mark player-table join "inactive"
//     // dump player-table cash back to player-house acct
//     // mark player-table acct "locked"
//   },
//   participate: (_gameId) => { },
//   observe: (_gameId) => { },

//   // browse designs
//   // suggest design to house
// });

export const makePlayerService = ({ playerRepo }) =>
  ({
    getAllPlayers: () =>
      playerRepo.getAll(),
    getPlayerById: (id) =>
      playerRepo.getById(id),
    getPlayerByUsername: (username) =>
      playerRepo.getByUsername(username),
    /**
       * @param {{username, password}} data
       */
    createPlayer: (data) => {
      const { username, password } = data;
      const passhash = hashSync(password, 14);
      const playerId = playerRepo.create({ username, passhash });
      return playerRepo.getById(playerId);
    },
  });
