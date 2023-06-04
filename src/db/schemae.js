import { createPlayerTable, } from '../feature/player/index.js'
import { createChipsetTable } from '../feature/chipset/index.js'
import { createGametableTable } from '../feature/gametable/index.js'
import { createHouseTable } from '../feature/house/index.js'
import { createChipTable, } from '../feature/chip/index.js'
import { createGameTable } from '../feature/game/index.js'

export const schemae = [
  createPlayerTable,
  createHouseTable,
  createGametableTable,
  createGameTable,
  createChipsetTable,
  createChipTable,
]