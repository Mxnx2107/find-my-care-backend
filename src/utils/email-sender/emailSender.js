import nodemailer from "nodemailer";


const sendEmail = async ({ email, subject, message }) => {

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOption = {
            from: `"ABC Hospital" <${process.env.EMAIL_USER}>`,
            to: email,
            subject,
            html: message,
        };

        await transporter.sendMail(mailOption);
    } catch (error) {
        console.log("Email Error", error);
    }
}

export default sendEmail;