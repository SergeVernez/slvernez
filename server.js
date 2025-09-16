require('dotenv').config(); // charge les variables .env
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou un autre service (ex : outlook, yahoo)
  auth: {
    user: 'votre_email@gmail.com',
    pass: 'votre_mot_de_passe', // Attention : utilisez des variables d'environnement pour des raisons de sécurité !
  },
});

const mailOptions = {
  from: 'votre_email@gmail.com',
  to: 'destinataire@gmail.com',
  subject: 'Sujet de l’email',
  text: 'Bonjour, ceci est un test envoyé avec Nodemailer !',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur :', error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
});