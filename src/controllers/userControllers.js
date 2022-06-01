import bcrypt from 'bcryptjs';
import UserService from '../services/userServices';
import { signinToken, decode } from '../utilities/jwt';
import Response from '../helpers/Response';
import { emailSender } from '../utilities/nodemailer';
import emailMocks from '../utilities/emailMocks';
import pwd from "../utilities/passwordGenerator";


/**
 * @author Emmanuel N.
 * @since 22th march 2022
 */
class UserControllers {
  /**
   * Create user account
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async signUp(req, res) {
 
    const newUser = req.body;
    try {
      newUser.email = newUser.email.toLowerCase();
      const userExist = await UserService.findOneByEmail(
        newUser.email,
      );
      if (userExist) {
        return Response.error(res, 400, { message: 'user is already exist' });
      }
      newUser.password = await bcrypt.hash(newUser.password, 12);
      const user = await UserService.create(newUser);
      const userData = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      const token = signinToken(userData, keys.EMAIL_JWT_SECRET);
      const emailOptions = {
        email: user.email,
        message: await emailMocks.verifyAccount({
          ...userData,
          token,
        }),
        subject: 'Account Verification Link',
      };
      await emailSender(emailOptions);
      return Response.success(res, 201, {
        message: `Dear ${user.firstName}, verify your email`,
        user: userData,
        token,
      });
    } catch (error) {
      return Response.error(res, 500, {
        error: error.message,
        message: 'something went wrong',
      });
    }
  }

  static async createUser(req, res) {
    try {
      const generatedPassword = pwd.generatePassword();
      const hashed = await bcrypt.hash(generatedPassword, 12);
      const theUser = {
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: hashed,
        phoneNumber: req.body.phone    
      };
      const email = theUser.email;
     
      const doesExist = await UserService.findOne({
        where: { email },
      });
      if (doesExist) {
        return Response.error(res, 400, { message: 'user is already exist' })
      }
      
      const options = {
        email: `${email}`,
        subject: "Registration is Successful",
        message: await emailMocks.signupEmail(email, generatedPassword),
      };
      await emailSender(options);
      const user =  await UserService.create(theUser);
    
      return Response.success(res, 201, {
        message:"user created successfull",
        user
      })

    } catch (error) {
      return Response.error(res, 500, { message:'server error',error:error.message });
    }
  }

  /**
   * User signin
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async signIn(req, res) {
    const { email, password } = req.body;
    try {
      let user = await UserService.findOneByEmail(email);
      if (!user) {
        return Response.error(res, 404, {
          message: 'Invalid username or password',
        });
      }
      const foundUser = user.toJSON();
      const isEqual = await bcrypt.compare(
        password,
        foundUser.password,
      );
      if (!isEqual) {
        return Response.error(res, 404, {
          message: 'Invalid username or password',
        });
      }
      user.status = 1; // update login status
      user = await user.save();
      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email,
        firstName: inUser.firstName,
        lastName: inUser.lastName,
      };
      const token = signinToken(userData);
      userData.password = undefined
      return Response.success(res, 200, {
        message: 'login successfully',
        user: userData,
        token,
      });
    } catch (error) {
      return Response.error(res, 500, { message:'server error',error:error.message });
    }
  }


  /**
   * User logout
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async logOut(req, res) {
    try {
      let user = await UserService.findByPk(req.me.id);
      user.status = 0; // update login status
      user = await user.save();
      user.password = undefined
      return Response.success(res, 201, {
        message: 'logout successfully',
        user: user.toJSON(),
      });
    } catch (error) {
      const message = error.message || 'something went wrong';
      return Response.error(res, 500, { message });
    }
  }

  /**
   * Forget password
   * @param {Request} req Request
   * @param {Response} res Response
   * @returns
   */
  static async forgettingPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await UserService.findOne({ where: { email } });
      if (!user) {
        return Response.error(res, 401, {
          message: 'user not found, signup',
        });
      }

      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email,
        firstName: inUser.firstName,
      };
      const token = signinToken(userData, process.env.EMAIL_JWT_SECRET);
      const emailOptions = {
        email: inUser.email,
        message: await emailMocks.forgetPassword({
          ...inUser,
          token,
        }),
        subject: 'Reset Password Link',
      };
      await emailSender(emailOptions);
      return Response.success(res, 201, {
        message: 'check your email',
      });
    } catch (error) {
      const message = error.message || 'something went wrong';
      return Response.error(res, 500, { message });
    }
  }

  /**
   * Reset password
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async resetingPassword(req, res) {
    const { password, token } = req.body;
    try {
      const { id } = decode(token);
      let user = await UserService.findByPk(id);
      if (!user) {
        return Response.error(res, 401, {
          message: 'user not found, signup',
        });
      }
      user.password = await bcrypt.hash(password, 12);
      user = await user.save();
      return Response.success(res, 201, {
        message: 'password updated',
      });
    } catch (err) {
      if (
        err.message === 'jwt malformed' ||
        err.message === 'invalid token' ||
        err.message === 'jwt expired'
      ) {
        return Response.error(res, 400, {
          message: 'You are using Incorrect or Expired Link!',
          error: err.message,
        });
      }
      return Response.error(res, 500, {
        message: 'server errror',
        error: err.message,
      });
    }
  }

  /**
   * Get my profile
   * @param {object} req Request
   * @param {Response} res Response
   */
  static async getProfile(req, res) {
    if (!req.isAuth) {
      return Response.error(res, 404, {
        message: "you aren't logged in",
      });
    }
    try {
      const user = await UserService.findByPk(req.me.id);
      user.password = undefined
      return Response.success(res, 201, {
        message: 'your profile',
        profile: user.toJSON(),
      });
    } catch (error) {
      const message = error.message || 'something went wrong';
      return Response.error(res, 500, { message });
    }
  }
}
export default UserControllers;