const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables

// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;

// Create Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS,   // Use environment variable
  },
});

// Verify the connection to the email server
contactEmail.verify((error) => {
  if (error) {
    console.log("Error connecting to email service:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Route to handle contact form submissions
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ code: 400, status: "All fields are required" });
  }

  // Create the email content
  const mail = {
    from: `${firstName} ${lastName}`, // Use both first and last name
    to: process.env.EMAIL_USER, // Use environment variable
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send the email
    await contactEmail.sendMail(mail);
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, status: "Message not sent. Please try again later." });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
