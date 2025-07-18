import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: Request) => {
  const { name, email, phone, message } = await request.json();

  try {
    // Step 1: Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marsad11223@gmail.com",
        pass: "qwaa gpky fuxl fzqp",
      },
    });

    // Step 2: Set email options
    const mailOptions = {
      from: "marsad11223@gmail.com", // shows sender name
      to: "hashamghaffar01@gmail.com", // target recipient
      subject: "Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Step 3: Send the email
    const result = await transporter.sendMail(mailOptions);

    // Step 4: Log the response for debugging
    // console.log("✅ Email send result:", result);

    // Step 5: Check if accepted
    if (result.accepted.length === 0) {
      console.warn("⚠️ Email not accepted by recipient server.");
      return NextResponse.json(
        { error: "Email was not accepted by the recipient server." },
        { status: 500 }
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
