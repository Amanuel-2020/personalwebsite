const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { response } = require('express');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

smpttransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'amanuelwakshum@gmail.com',
        pass: 'AmanHosting2020@@'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

app.post('/api/forma', (req, res) => {
    const mailOptions = {
        from: `${req.body.email}`,
        to: `amanuelwakshum@gmail.com`,
        subject: `${req.body.subject}`,
        html: `
         <h1>Contact</h1>
         <span>Name:  ${req.body.name}</span><br /><br />

         <span>Message<br /><br /><br />
          ${req.body.message}   
         </span>
        `
    };

    smpttransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send('success')
        }
    });
});


PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running.... ${PORT}`)
})