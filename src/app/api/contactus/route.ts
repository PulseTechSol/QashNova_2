import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  const { name, email, phone, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qashnova123@gmail.com",
        pass: "jzgn dbey uppw ppjj",
      },
    });

    const mailOptions = {
      from: "hello@qashnova.com",
      to: "hello@qashnova.com",
      subject: "Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    if (result.accepted.length === 0) {
      console.warn("⚠️ Email not accepted by recipient server.");
      return NextResponse.json(
        { error: "Email was not accepted by the recipient server." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: unknown) {
    let errorMessage = "Unknown error occurred while sending email.";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("❌ Email error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
