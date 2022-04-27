/**
 * @author Emmanuel N.
 * @since 15th March 2022
 */
export default class Response {
  /**
   *
   * @param {Response} res Request
   * @param {Number} code Error code
   * @param {Object} error Error object
   * @returns Response
   */
  static error(res, code, error) {
    return res.status(code).json({
      status: code,
      error: {
        ...error,
      },
    });
  }

  /**
   *
   * @param {Response} res Request
   * @param {Number} code Error code
   * @param {Object} data Data response
   * @returns Response
   */
  static success(res, code, data) {
    return res.status(code).json({
      status: code,
      data: {
        ...data,
      },
    });
  }
}
