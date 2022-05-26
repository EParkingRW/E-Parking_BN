import nodemailer from 'nodemailer'

/**
 * @author Emmanuel N.
 * @since 2th Marc 2022
 * @param {Object} option - payload cantaining what sendmail need
 */
export const emailSender = async (options) => {
  try {
    var transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // hostname
        service: 'outlook',
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: 'paternenught@outlook.com',
          pass: 'Hirwa100',
        }
    });
    const mailOptions = {
      from: `Smart Parking <paternenught@outlook.com>`,
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