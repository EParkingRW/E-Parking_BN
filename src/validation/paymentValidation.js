import Joi from 'joi';
import Response from '../helpers/Response';

export default class PaymentValidation {
  static async momo(req, res, next) {
    const schema = Joi.object().keys({
      phone_number: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().messages({
        'string.base': '{{#label}} must be a string',
        "string.empty": `{{#label}} cannot be an empty field`,
        "any.required": `{{#label}} is a required.`,
        "string.pattern.base":"{{#label}} must satisfy pattern like 555-555-5555"
    }),
      amount: Joi.string().required(),
    });
    const { error } = schema.validate({
      phone_number: req.body.phone_number,
      amount: req.body.amount,
    });
    if (error) {
      return Response.error(res, 400, {
        message: error.details[0].message.replace(/"/g, ''),
      });
    }
    return next();
  }

  static async card(req, res, next) {
    const schema = Joi.object().keys({
        card_number: Joi.string().required(),
        cvv: Joi.string().required(),
        expiry_month:Joi.string().required().max(2),
        expiry_year:Joi.string().required().max(2),
        currency:Joi.string().valid('RWF', 'USD').default('RWF'),
        amount:Joi.number().integer().required(),
        phone_number: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().messages({
          'string.base': '{{#label}} must be a string',
          "string.empty": `{{#label}} cannot be an empty field`,
          "any.required": `{{#label}} is a required.`,
          "string.pattern.base":"{{#label}} must satisfy pattern like 555-555-5555"
      })
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return Response.error(res, 400, {
        message: error.details[0].message.replace(/"/g, ''),
      });
    }
    return next();
  }

  static async cash(req, res, next) {
    const schema = Joi.object().keys({
        amount:Joi.number().integer().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return Response.error(res, 400, {
        message: error.details[0].message.replace(/"/g, ''),
      });
    }
    return next();
  }


}
