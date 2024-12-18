import nodemailer from 'nodemailer';
import config from '../config/config.js';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port:465,
    secure:true,
    auth: {
        user: config.EMAIL.USER, // Tu dirección de correo electrónico
        pass: config.EMAIL.PASSWORD, // Tu contraseña o el API key si usas un servicio como SendGrid
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Función para enviar el correo
export const sendEmail = async (to, subject, html) => {
    try {
        if (!to) {
            console.error('No se proporcionó un correo electrónico de destino');
            return;
        }
        const info = await transporter.sendMail({
            from: config.EMAIL.USER, // Remitente
            to: to, // Destinatario
            subject: subject, // Asunto
            html: html, // Contenido HTML
        });
        console.log('Correo enviado:', info.response);
    } catch (error) {
        console.log('Error al enviar correo:', error);
    }
};