import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "171a8746c77083",
        pass: "feb4b5901bc076"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Lucas Jacomini <lucasparizijacomini@gmail.com>',
            subject,
            html: body,
        })
    };
}