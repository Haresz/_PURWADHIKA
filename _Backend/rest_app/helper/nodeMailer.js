const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rizalfikri852@gmail.com",
    pass: "ssqq eibr oteq ogjj",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
