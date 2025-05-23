import {MailtrapClient} from 'mailtrap'
import dotenv from 'dotenv'


dotenv.config();

export const mailTrapClient = new MailtrapClient({
    endpoint:process.env.MAILTRAP_ENDPOINT,
    token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.co",
    name: "Arsen",
};


// client
//     .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
// })
// .then(console.log, console.error);