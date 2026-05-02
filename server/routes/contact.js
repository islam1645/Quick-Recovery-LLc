const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  console.log("Data received from frontend:", req.body);
  const { name, email, phone, message } = req.body;

  // 1. Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // 2. Setup Transporter (using your .env variables)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Your 16-character App Password
    },
  });

  // 3. Email Options
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Best practice: send FROM your own email
    replyTo: email, // This lets you hit "Reply" to email the client back directly
    to: 'saidoun.islam@gmail.com', // Your work address
    subject: `New Quote Request from ${name}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    // Send success response to React
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent to our team!' 
    });
  } catch (error) {
    console.error('--- NODEMAILER ERROR ---');
    console.error(error.message); // This will print the exact reason in your terminal
    console.error('------------------------');
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;