/**
 *
 * @param obj
 */
export const isEmpty = (obj) => {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
};
