import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send(error.toString());
      } else {
        res
          .status(200)
          .send("Email sent", info.response);
      }
    });
  } else {
    res.status(405).end();
  }
}
