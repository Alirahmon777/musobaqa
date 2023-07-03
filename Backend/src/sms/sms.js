var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'temureshtemirov10@gmail.com',
        pass: '1510201016temur'
    }
});

var mailOptions = {
    from: 'temureshtemirov@gmail.com',
    to: 'alirahmonuraliev007@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});