import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, projectDetails } = body;

    // Validation
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, projectDetails' },
        { status: 400 }
      );
    }

    // Email to Sigmatronics
    const sigmatronicsEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - ${inquiryType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #FF6600;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not specified'}</p>
          
          <h3 style="color: #FF6600; margin-top: 20px;">Project Details:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #FF6600;">
            ${projectDetails.replace(/\n/g, '<br/>')}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">This is an automated email from Sigmatronics contact form.</p>
        </div>
      `,
    };

    // Confirmation email to user
    const userEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Sigmatronics Innovation',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #FF6600;">Thank You for Contacting Sigmatronics!</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p>Hi ${name},</p>
          
          <p>We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.</p>
          
          <p><strong>Your submission details:</strong></p>
          <ul style="background-color: #f5f5f5; padding: 15px 15px 15px 35px; border-left: 4px solid #FF6600;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
            <li><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</li>
          </ul>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Visit our website: <a href="https://sigmatronics.ai" style="color: #FF6600;">sigmatronics.ai</a></li>
            <li>Check out our portfolio and case studies</li>
            <li>Explore our technology verticals</li>
          </ul>
          
          <p>If you have any urgent questions, feel free to call us at <strong>+91 98904 55177</strong></p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            Best regards,<br/>
            <strong>Sigmatronics Innovation Private Limited</strong><br/>
            121, Welcome Society, Behind Shriram Heights<br/>
            Katol Road, Nagpur, Maharashtra - 440013<br/>
            <a href="https://sigmatronics.ai" style="color: #FF6600;">sigmatronics.ai</a>
          </p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(sigmatronicsEmail),
      transporter.sendMail(userEmail),
    ]);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: String(error) },
      { status: 500 }
    );
  }
}
