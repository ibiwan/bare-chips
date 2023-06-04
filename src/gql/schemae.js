import { schema as gametableSchema } from '#feature/gametable/index.js'
import { schema as chipsetSchema } from '#feature/chipset/index.js'
import { schema as playerSchema } from '#feature/player/index.js'
import { schema as houseSchema } from '#feature/house/index.js'
import { schema as gameSchema } from '#feature/game/index.js'
import { schema as chipSchema } from '#feature/chip/index.js'

export const schemae = [
  chipSchema,
  chipsetSchema,
  gameSchema,
  gametableSchema,
  playerSchema,
  houseSchema
]
