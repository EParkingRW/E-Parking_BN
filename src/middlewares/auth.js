import { decode } from '../utilities/jwt';
import { User } from '../database/models';
import Response from '../helpers/Response';
/**
 * Middleware for checking authenticated user
 * @param {Request} req - Client request
 * @param {Response} next - Server response
 */
export const isAuth = (req, _, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = decode(token);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.me = decodedToken;
  return next();
};

// eslint-disable-next-line consistent-return
export const isLoggedIn = async (req, res, next) => {
  if (!req.me) {
    return Response.error(res, 403, {
      message: 'Invalid/expired token, Login again',
    });
  }
  const { id } = req.me;
  try {
    const frestUser = await User.findByPk(id);
    if (!frestUser.status) {
      return Response.error(res, 401, {
        message:
          'User already logged out, Please Login and try again!',
      });
    }
    next();
  } catch (err) {
    return Response.error(res, 401, {
      message: 'invalid token,login to get one',
      erroMessage: err.message,
    });
  }
};
