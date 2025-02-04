import {createUser, getUserByField} from '../repositories/userRepository';
import {compareHashedPassword, getHashPassword} from '../helpers/auth/bcrypt';
import {generateToken} from '../helpers/auth/token';

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const register = async (req, res) => {
  try {
    const {email, password, ...restData} = req.body;
    const user = await getUserByField(email, 'email');
    if (user) {
      return res.status(409).json({
        success: false,
        error: 'User already exists',
      });
    }
    const hashedPassword = getHashPassword(password);
    const respData = await createUser({email, ...restData, hashedPassword});
    return res.status(201).json({
      success: true,
      data: respData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email.trim() || !password.trim())
      return res.status(500).json({error: 'Invalid credentials', success: false});

    const userData = await getUserByField(email, 'email', true);

    if (!userData)
      return res
        .status(500)
        .json({error: 'This email has not been registered yet', success: false});

    const {hashedPassword, ...respData} = userData;
    const isMatch = compareHashedPassword(password, hashedPassword);
    const refreshToken = generateToken({_id: userData.id}, '10 days');
    const accessToken = generateToken({_id: userData.id}, '2h');

    if (isMatch) {
      res.cookie('refreshToken', refreshToken, {httpOnly: true, sameSite: 'None'});
      res.cookie('accessToken', accessToken, {httpOnly: true, sameSite: 'None'});
      return res.status(200).json({
        success: true,
        data: {...respData},
      });
    }
    return res.status(500).json({error: 'Mismatch data', success: false});
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({error: e.message, success: false});
  }
};
