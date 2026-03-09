import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Load .env
config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📬 Portfolio Message: ${subject}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #0a0e17; color: #eae5ec; padding: 30px; border-radius: 12px;">
        <h2 style="color: #5eead4; margin-bottom: 20px;">New Message from Your Portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">Name</td>
            <td style="padding: 10px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #5eead4;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px;">Subject</td>
            <td style="padding: 10px 0; font-weight: 600;">${subject}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
        <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Message</p>
        <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
        <p style="color: #555; font-size: 12px; text-align: center;">Sent from bhipendarkumar.dev portfolio</p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Message sent! I'll get back to you soon." });
    } catch (error) {
        console.error("Nodemailer error:", error.message);
        res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`\n✅ Email server running on http://localhost:${PORT}`);
    console.log(`   POST /api/contact is ready\n`);
});
