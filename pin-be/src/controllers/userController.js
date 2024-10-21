import {getUserId} from '../helpers/auth/user';
import {getUserById} from '../repositories/userRepository';

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const get = async (req, res) => {
  try {
    const userId = getUserId(req);
    const userData = getUserById(userId);
    if (!userData) return res.status(500).json({success: false, message: 'User not found'});
    return res.status(200).json({success: true, data: userData});
  } catch (e) {
    return res.status(500).json({success: false, error: 'Error while get user by id'});
  }
};
