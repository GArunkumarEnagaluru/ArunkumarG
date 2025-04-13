// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to send email
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
