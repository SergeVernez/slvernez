// 1. Charger les variables d'environnement
require('dotenv').config();

// 🔹 2. Importer les modules
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// 🔹 3. Middlewares pour lire les données du formulaire
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ← Ajout ici
app.use(express.static(__dirname));

// 4. Configurer le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 5. Créer la route POST pour le formulaire de contact
app.post('/send', (req, res) => {
  const { prenom, nom, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${prenom} ${nom}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur :', error);
      res.status(500).send('Erreur lors de l’envoi');
    } else {
      console.log('Email envoyé : ' + info.response);
      res.redirect('https://sergevernez.github.io/slvernez/confirmation.html');
    }
  });
});

// 6. Lancer le serveur
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});