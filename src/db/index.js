import Database from 'better-sqlite3';

import { createAdmin, createTables, summarize } from './tasks.js';

const options = {}

const init = () => {
  const db = new Database('../chips.db', options)

  createTables(db)
  createAdmin(db)
  summarize(db)

  return db
}

export const register = () => {
  const db = init()

  return (req, _res, next) => {
    req.context = { ...req.context, db }

    next()
  }
}
