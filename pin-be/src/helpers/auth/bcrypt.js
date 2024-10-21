import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 *
 * @param {String} password
 * @returns {*}
 */
export const getHashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  return bcrypt.hashSync(password, salt);
};

/**
 *
 * @param {String} plain
 * @param {String} hash
 * @returns {*}
 */
export const compareHashedPassword = (plain, hash) => {
  return bcrypt.compareSync(plain, hash);
};
