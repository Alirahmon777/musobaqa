export const getNextId = (arr) => {
  return arr.at(-1)?.id + 1 || 1;
};
