import Database from 'better-sqlite3';

import { createAdmin, createTables, summarize } from '../db/tasks.js';

export const makeDbService = () => {
  const options = {};
  const db = new Database('./chips.db', options);

  console.info('db created');

  createTables(db);
  createAdmin(db);
  summarize(db);

  return { db };
};
