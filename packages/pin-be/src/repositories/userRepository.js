import {userTable} from '../const/db';
import {removeFields} from '../helpers/object';

/**
 *
 * @param {String} id
 * @returns {Promise<{}|null>}
 */
export const getUserById = async (id) => {
  const userData = await userTable.findUnique({where: {id}});
  if (!userData) return null;
  return removeFields(userData, ['hashedPassword', 'password']);
};

/**
 *
 * @param {String} value
 * @param {String} key
 * @param {Boolean} getHashed
 * @returns {Promise<{}|null>}
 */
export const getUserByField = async (value, key = 'email', getHashed = false) => {
  const userData = await userTable.findFirst({where: {[key]: value}});
  if (!userData) return null;
  return removeFields(userData, [!getHashed && 'hashedPassword', 'password'].filter(Boolean));
};

/**
 *
 * @param {string} id
 * @param {object} updatedData
 * @returns {Promise<void>}
 */
export const updateUser = async (id, updatedData) => {
  const properUpdatedUser = removeFields(updatedData, ['hashedPassword', 'password', 'email']);
  await userTable.update({where: id, data: properUpdatedUser});
};

/**
 *
 * @param {object} createdData
 * @returns {Promise<{}>}
 */
export const createUser = async (createdData) => {
  const user = await userTable.create({data: createdData});
  return removeFields(user, ['hashedPassword', 'password']);
};
