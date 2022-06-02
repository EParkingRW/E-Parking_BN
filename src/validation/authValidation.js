import Joi from 'joi';
import Response from '../helpers/Response';

export default class AuthValidator {
  static async login(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (error) {
      return Response.error(res, 400, {
        message: error.details[0].message.replace(/"/g, ''),
      });
    }
    return next();
  }

  static async register(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().required(),
      phone: Joi.string().required().messages({
          'string.base': '{{#label}} must be a string',
          "string.empty": `{{#label}} cannot be an empty field`,
          "any.required": `{{#label}} is a required.`
      })
    })
    const { error } = schema.validate(req.body);
    if (error) {
      return Response.error(res, 400, {
        message: error.details[0].message.replace(/"/g, ''),
      });
    }
    return next();
  }

}

