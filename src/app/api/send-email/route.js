import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit } from "../../utils/rateLimiter";

const setCorsHeaders = (response) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
};

export async function POST(req) {
  const userAgent = req.headers.get("user-agent");
  if (!userAgent || userAgent.length < 10) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const contentType = req.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { message: "Invalid content type" },
      { status: 400 }
    );
  }
  try {
    const { limited } = checkRateLimit(req);
    if (limited) {
      return setCorsHeaders(
        NextResponse.json(
          {
            message: "Too many requests. Please try again in a minute.",
          },
          { status: 429 }
        )
      );
    }
    const { firstName, lastName, email, message } =
      await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const sanitizeInput = (input) =>
      input.replace(/(\r\n|\n|\r|%0A|%0D)/g, "").trim();

    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: sanitizedEmail,
      to: process.env.EMAIL,
      replyTo: sanitizedEmail,
      subject: `Nouvelle demande de contact de ${sanitizedFirstName} ${sanitizedLastName}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
            <div style="background-color: #007BFF; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0;">Nouvelle demande de contact</h1>
            </div>
            <div style="padding: 20px;">
              <p>Bonjour,</p>
              <p>Vous avez reçu une nouvelle demande de contact à partir du portfolio :</p>
              <p><strong>Nom :</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
              <p><strong>Email :</strong> <a href="mailto:${sanitizedEmail}" style="color: #007BFF;">${sanitizedEmail}</a></p>
              <p><strong>Message :</strong></p>
              <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">${sanitizedMessage}</p>
              <p>Veuillez contacter la personne dès que possible.</p>
            </div>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return setCorsHeaders(
      NextResponse.json({ message: "Success: email was sent" }, { status: 200 })
    );
  } catch (error) {
    console.error("Email Error:", error);
    return setCorsHeaders(
      NextResponse.json(
        { message: "Error sending email", error: error.message },
        { status: 500 }
      )
    );
  }
}