import { Op } from 'sequelize';
import { User, Role } from '../database/models';

/**
 * @author NKUBITO E.
 * @since 7th Feb 2022
 */
export default class UserService {
  /**
   * Find user by id
   * @param {Number} id User ID
   * @returns User
   */
  static findByPk(id) {
    return User.findByPk(id,{
      include: [{
        model: Role,
        as: 'role',
        attributes: ["title"]
      }]
    });
  }

  /**
   * Get all users
   * @returns List of users
   */
  static findAll() {
    return User.findAll({
      include: [{
        model: Role,
        as: 'role',
        attributes: ["title"]
      }]
    });
  }

  /**
   * Get all users
   * @returns List of users's email
   */
  static findAllEmail() {
    return User.findAll({
      attributes: ['email'],
    });
  }

  /**
   * Create user
   * @param {Object} user User object
   * @returns Created user
   */
  static create(user) {
    return User.create(user);
  }

  /**
   * Find user by given condition
   * @param {Object} condition Condition to follow ex: { where: {email: 'john@example.com' }}
   * @returns User that matches the condition
   */
  static findOne(condition) {
    return User.findOne(condition);
  }

  /**
   * Find user by email or username
   * @param {string} email
   * @param {string} username
   * @returns User that matches email or username
   */
  static findOneByLogin(email, username) {
    return User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });
  }

  /**
   * Find user by email or username
   * @param {string} email
   * @returns User that matches email or username
   */
  static findOneByEmail(email) {
    return User.findOne({
      where: {
        email,
      },
    });
  }

  /**
   * Delete users
   * @param {object} condition Condition to follow ex: { where: {email: 'john@example.com' }}
   * @returns Count the number of deleted users
   */
  static destroy(condition) {
    return User.destroy(condition);
  }
}