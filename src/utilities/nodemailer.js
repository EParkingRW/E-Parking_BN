import nodemailer from 'nodemailer'

/**
 * @author Emmanuel N.
 * @since 2th Marc 2022
 * @param {Object} option - payload cantaining what sendmail need
 */
export const emailSender = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_SERVICE,
      port: 465,
      auth: {
        user: process.env.SERVICE_USERNAME,
        pass: process.env.SERVICE_PASSWORD,
      },
      secure: true,
      logger: true,
      debug: true,
    });
    const mailOptions = {
      from: `Smart Parking <${process.env.SERVICE_USERNAME}>`,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };
    console.log(mailOptions);
    return transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
};