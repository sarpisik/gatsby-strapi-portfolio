/**
 * Read the documentation () to implement custom service functions
 */

const nodemailer = require('nodemailer'),
  // Gmail auth config.
  auth = {
    type: 'oauth2',
    user: process.env.EMAIL_AUTH_USER,
    clientId: process.env.EMAIL_AUTH_CLIENT_ID,
    clientSecret: process.env.EMAIL_AUTH_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_AUTH_REFRESH_TOKEN
  },
  // Create reusable transporter object using SMTP transport.
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth
  });

// Verify the auth credentials
transporter.verify(error =>
  error
    ? console.error(error)
    : console.log('Server is ready to take our messages')
);

module.exports = {
  send: (from, to, subject, html) => {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      html
    };

    // Return a promise of the function that sends the email.
    return transporter.sendMail(options, (error, info) =>
      error ? console.error(error) : console.log('Message sent: %s', info)
    );
  }
};
