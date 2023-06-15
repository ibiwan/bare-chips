import { templateGrid } from '#db/const/_template.db.const.js';
import {
  selectAll, selectBy,
} from '#db/query/_common.db.query.js';
import { idField, ownerIdField } from '#db/const/_common.db.const.js';

export const makeTemplateRepo = ({ dbService: { db } }) =>
  ({
    getAll: () =>
      db.prepare(selectAll(templateGrid)).all(),
    getById: (id) =>
      db.prepare(selectBy(templateGrid, idField)).get({ id }),
    getByOwnerId: (ownerId) =>
      db.prepare(selectBy(templateGrid, ownerIdField)).all({ ownerId }),

    /**
   * @param {{color, value, designId, ownerId}} data
   */
    create: (data) =>
      db.prepare(`
    INSERT INTO ${templateGrid}  
      (color, value, ${ownerIdField}) 
      VALUES (@color, @value, @${ownerIdField});
    `).run(data),
  });
