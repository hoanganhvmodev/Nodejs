const nodemailer = require("nodemailer");
const { user } = require("../models/user");

//send email with https://ethereal.email
async function sendEmail(req, res) {
    const id = req.body.userid;
    let USER = await user.findOne({ where: { id: id } });
    let email = USER.email;
    console.log('>>>>>>>>', email);
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'alverta.ritchie59@ethereal.email', // generated ethereal user
            pass: 'jMwwd9FDZEEPubwSvT', // generated ethereal password
        },
    });

    const msg = {
            from: '"The Exapress" <foo@example.com>', // sender address
            to: `${email}`, // list of receivers
            subject: "sendEmail", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world, test send email</b>", // html body
        }
        // send mail with defined transport object
    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // res.send('email sent!');
}

module.exports = { sendEmail };