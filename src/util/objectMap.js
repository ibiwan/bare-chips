export const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(fn));
