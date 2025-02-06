const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email',
        pass: 'password'
    }
});

const mailOptions = {
    from: 'your-email',
    to: 'recipient-email',
    subject: 'Sending mail using Node.js',
    text: 'Hello you from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
