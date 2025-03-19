const nodmailer = require('nodemailer');

//configuration du transporteur
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'slvfrontdesign@gmail.com',
        pass: ''
    }
});

//fonction pour envoyer una mail