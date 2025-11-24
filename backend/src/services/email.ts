import * as nodemailer from "nodemailer";
import { SMTP_USER, SMTP_HOST, SMTP_PASS, SMTP_PORT } from "../config/env";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
} as SMTPTransport.Options);

interface mailOptions {
  name: string;
  to: string;
  otp: number;
}

const sendEmail = async (options: mailOptions) => {
  const { name, to, otp } = options;
  const text = `Hi ${name} here is your otp for verification <br/> Your OTP: ${otp}`;
  const subject = `Verify your otp`;

  await transporter.sendMail({
    to: to,
    subject: subject,
    html: text,
    from: "Loan Managment APP",
  });
};


export default sendEmail