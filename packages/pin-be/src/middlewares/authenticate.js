import {generateToken, isValidToken, verifyToken} from '../helpers/auth/token';
import express from 'express';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {*}
 */
export default function authMiddleware(req, res, next) {
  console.log(req.cookies);
  const accessToken = req.cookies.get('accessToken');
  if (accessToken) {
    const validAccessToken = isValidToken(accessToken);

    if (!validAccessToken) {
      const refreshToken = req.cookies.get('refreshToken');
      if (!refreshToken)
        return res.status(403).json({success: false, error: 'Invalid access token'});

      const validRefreshToken = isValidToken(refreshToken);
      if (!validRefreshToken)
        return res.status(403).json({success: false, error: 'Invalid refresh token'});

      const newAccessToken = generateToken({_id: validRefreshToken._id});

      res.cookie('refreshToken', newAccessToken, {httpOnly: true});
      req['_userId'] = validRefreshToken._id;
      return next();
    }
    req['_userId'] = validAccessToken._id;
    return next();
  }
  return res.status(403).json({success: false, error: 'Access token must be included'});
}
