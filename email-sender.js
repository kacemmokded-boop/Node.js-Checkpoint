const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "YOUR_EMAIL@gmail.com",
    pass: process.env.EMAIL_PASS || "YOUR_APP_PASSWORD",
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER || "YOUR_EMAIL@gmail.com",
  to: "DESTINATAIRE@gmail.com",
  subject: "Test Nodemailer - Checkpoint Node.js",
  text: "Hello ! Ceci est un email envoyé depuis Node.js.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur d'envoi :", error);
  }
  console.log("Email envoyé avec succès :", info.response);
});
