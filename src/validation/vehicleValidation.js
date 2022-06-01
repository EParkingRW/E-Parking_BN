import Joi from 'joi';
import Response from '../helpers/Response';

export default class vehicleValidator {
  static async entrance(req, res, next) {
    const schema = Joi.object().keys({
      photo: Joi.object().required().messages({
        "any.required": 'image is required',
        "any.optional":"Image must be provided"
    }),
      plateText: Joi.string().required(),
    });
    try {
      const { error } = schema.validate({
        photo: req.files.photo,
        plateText: req.body.plateText,
      });
      if (error) {
        return Response.error(res, 400, {
          message: error.details[0].message.replace(/"/g, ''),
        });
      }
    } catch (error) {
      return Response.error(res, 400, {
        message:"image must be provided"
      })
    }
    return next();
  }

}
