const { WEB_APP_URL } = process.env;

export default class emailMocks {
  /**
   * Create user account
   * @param {Object} mailOptions Object
   */
  static async verifyAccount(mailOptions) {
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
                Hi <span>${mailOptions.firstName}</span>,<br><br>
                Welcome in the Smart Parking a ofcourse in the metaverse!!<br /> <br />
                In this digital era we must make sure that we are not interacting <br />
                with robots hence we are verifying your email address. <br />
                 <a href="${WEB_APP_URL}/activate-account?activation=${mailOptions.token}"><button type="button" style="   border: none;color: white;padding: 10px; text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;background-color: #4CAF50;">click here</button></a>
                <br /><br />
                Welcome again in the metaverse and we expect you to be creating your AR experiences by now :-)<br><br>
                Best,<br>
                <span>quickAR</span>
            </p>
        </div>
      `;
  }

  /**
   * Create user account
   * @param {Object} mailData Object
   */
  static async forgetPassword(mailData) {
    const url = `${WEB_APP_URL}/reset-password?token=${mailData.token}`;
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
               Hello, <br><br>
               No worries humans forget, you are missing in the Smart Parking : <br />
               Straigh forward use this link to catch up and reset your password again <br />
               as usual <br />
               <b style="color:#2E86C1"><a href="${url}" style="color:#4CAF50">click here</a></b><br>
            <strong>NB:</strong><span style="color:OrangeRed">  remember that this link will be expired not too Long </span>
                <br /><br />
                
                Best,<br>
                <span>Smart Parking System</span>
            </p>
        </div>
      `;
  }
   /**
   * Create user account
   * @param {Object} mailData Object
   */
  static async signupEmail (email,password){
    return `
    <div style="font-size:15px;box-shadow:4px 4px 2px;padding:10px;color:#000">
      <h1 style="font-size:25px;color:#2E86C1;border-bottom: 4px solid #2E86C1;">Smart Parking App</h1>
      <p style="color:#000;font-size:17px">Thank you for registering on Smart Parking app.
      You should use the credentials below to sign in:<p>
      Email: <b style="color:#2E86C1">${email}</b><br>
      Password: <b style="background-color:#2E86C1;color:#fff">${password}</b>
    </div>
`
  }

}