const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'joaomtripoli@gmail.com',
    subject: 'Welcome to Task app!',
    text: `Welcome to the app, ${name}. Glad to see you join us!`,
  });
};

const sendFarwellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'joaomtripoli@gmail.com',
    subject: 'Task app cancel account',
    text: `Sad to see you go, ${name}. Let me know if we could have done anything better!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendFarwellEmail,
};
