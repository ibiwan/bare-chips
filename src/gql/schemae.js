import { chipTypeDefs } from '#gql/typeDefs/chip.gql.typeDefs.js';
import { chipResolvers } from '#gql/resolvers/chip.gql.resolvers.js';

import { designTypeDefs } from '#gql/typeDefs/design.gql.typeDefs.js';
import { designResolvers } from '#gql/resolvers/design.gql.resolvers.js';

import { gameTypeDefs } from '#gql/typeDefs/game.gql.typeDefs.js';
import { gameResolvers } from '#gql/resolvers/game.gql.resolvers.js';

import { houseTypeDefs } from '#gql/typeDefs/house.gql.typeDefs.js';
import { houseResolvers } from '#gql/resolvers/house.gql.resolvers.js';

import { playerTypeDefs } from '#gql/typeDefs/player.gql.typeDefs.js';
import { playerResolvers } from '#gql/resolvers/player.gql.resolvers.js';

import { tableTypeDefs } from '#gql/typeDefs/table.gql.typeDefs.js';
import { tableResolvers } from '#gql/resolvers/table.gql.resolvers.js';

export const schemae = [
  {
    typeDefs: chipTypeDefs,
    resolvers: chipResolvers,
  },
  {
    typeDefs: designTypeDefs,
    resolvers: designResolvers,
  },
  {
    typeDefs: gameTypeDefs,
    resolvers: gameResolvers,
  },
  {
    typeDefs: houseTypeDefs,
    resolvers: houseResolvers,
  },
  {
    typeDefs: playerTypeDefs,
    resolvers: playerResolvers,
  },
  {
    typeDefs: tableTypeDefs,
    resolvers: tableResolvers,
  },
];
