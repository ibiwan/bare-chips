export const selectAll = (table) =>
  `SELECT * FROM ${table};`;
export const selectBy = (table, field) =>
  `SELECT * FROM ${table} WHERE ${field} = @${field};`;
