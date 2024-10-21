/**
 *
 * @param {Object} obj
 * @param {String[]} fields
 * @returns {{}}
 */
export const removeFields = (obj, fields = []) => {
  const fieldsSet = new Set(fields); // Use a Set for O(1) lookup time
  return Object.keys(obj).reduce((acc, key) => {
    if (!fieldsSet.has(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 *
 * @param {Object} obj
 * @param {String[]} fields
 * @returns {{}}
 */
export function pickFields(obj, fields = []) {
  return fields.reduce((result, field) => {
    if (obj.hasOwnProperty(field)) {
      result[field] = obj[field];
    }
    return result;
  }, {});
}
