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
      phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().messages({
          'string.base': '{{#label}} must be a string',
          "string.empty": `{{#label}} cannot be an empty field`,
          "any.required": `{{#label}} is a required.`,
          "string.pattern.base":"{{#label}} must satisfy pattern like 555-555-5555"
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

