export const throwDNE = (itemType, itemId) => { throw new Error(`item does not exist: ${itemType}(${itemId})`); };
