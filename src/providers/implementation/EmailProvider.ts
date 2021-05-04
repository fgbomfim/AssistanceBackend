import { IEmail, IEmailProvider } from "../IEmailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class EmailProvider implements IEmailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "766a743c3cc6de",
        pass: "6e2dc93c1ec29e"
      }
    });
  }

  async sendMail(email: IEmail): Promise<void> {
    this.transporter.sendMail({
      to: {
        name: email.to.name,
        address: email.to.email,
      },
      from: {
        name: email.from.name,
        address: email.from.email,
      },
      subject: email.subject,
      html: email.body,
    })
  }

}