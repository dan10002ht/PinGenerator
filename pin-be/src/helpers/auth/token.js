import jwt from 'jsonwebtoken';

/**
 *
 * @param {Object} payload
 * @param {String} expiresIn
 * @returns {string}
 */
export const generateToken = (payload, expiresIn = '1d') => {
  return jwt.sign({...payload}, process.env.JWT_SECRET, {expiresIn});
};

/**
 *
 * @param token
 * @returns {null|JwtPayload|string}
 */
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (e) {
    console.log('Unable to verify token', e.message);
    return null;
  }
};

/**
 *
 * @param token
 * @returns {{_id}|JwtPayload|string|boolean}
 */
export const isValidToken = (token) => {
  const decodedToken = verifyToken(token);
  if (!decodedToken || !decodedToken._id) return false;
  return decodedToken;
};
