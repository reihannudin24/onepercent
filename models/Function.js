const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
    },
});


const Function = {
    sendEmail: async (to, subject, text, html) => {
        await transporter.sendMail({
            from: `"One Percent" <${process.env.EMAIL_NODEMAILER}>`,
            to: to,
            subject: subject,
            html: html,
        });
    },

    randomCode: (index) => {
        let code = "";
        for (let i = 0; i < index; i++) {
            code += Math.floor(Math.random() * 9)
        }
        return parseInt(code)
    }
}

module.exports = Function