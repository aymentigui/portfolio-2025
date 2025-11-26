"use server";

import { contactSchema } from "@/schema/contact";
import nodemailer from "nodemailer";
import z from "zod";

export async function sendMail(formData: FormData) {
  try {
    // Extraction des données du FormData
    const rawData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    // Validation avec Zod
    const validatedData = contactSchema.parse(rawData);

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || 
        !process.env.EMAIL_USER || !process.env.EMAIL_PASS || 
        !process.env.EMAIL_FROM) {
      throw new Error("Configuration email manquante");
    }

    // Configuration SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenu de l'email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: "aymentigui@gmail.com",
      subject: `Nouveau message de ${validatedData.firstname} ${validatedData.lastname}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${validatedData.firstname} ${validatedData.lastname}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Téléphone:</strong> ${validatedData.phone}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Message:</strong><br>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { success: true, message: "Message envoyé avec succès!" };

  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Données invalides", 
        errors: error.message 
      };
    }
    
    return { 
      success: false, 
      message: "Erreur lors de l'envoi du message. Veuillez réessayer." 
    };
  }
}