import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { selectedDate, dateChoice, description } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',

      port: 2525,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.YOUR_EMAIL,
      subject: 'SHE SAID YES ❤️🥹',
      html: `
        <div style="font-family: Bilbo, cursive; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; border-radius: 20px;">
          <h1 style="text-align: center; font-size: 2.5em; margin-bottom: 20px; font-family: Lavishly Yours, cursive;">SHE SAID YES! ❤️🥹</h1>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin: 20px 0;">
            <h2>📅 Date Selected:</h2>
            <p style="font-size: 1.2em; font-family: Bilbo Swash Caps, cursive; margin: 10px 0;">${selectedDate}</p>
            
            <h2>🎯 Date Choice:</h2>
            <p style="font-size: 1.2em; font-family: Bilbo Swash Caps, cursive; margin: 10px 0;"><strong>${dateChoice}</strong></p>
            <p style="font-style: italic;">${description}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; font-size: 1.2em;">
            <p>🚀 Get ready, lover boy!</p>
            <p>Time to plan the perfect date! 💕</p>
          </div>
        </div>
      `,
    };

    // Email to her
    const mailOptionsToHer = {
      from: process.env.EMAIL_USER,
      to: process.env.HER_EMAIL,
      subject: 'YOU SAID YES ❤️🥹',
      html: `
        <div style="font-family: Bilbo, cursive; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; border-radius: 20px;">
          <h1 style="text-align: center; font-size: 2.5em; margin-bottom: 20px; font-family: Lavishly Yours, cursive;">Thank You for Saying Yes! ❤️🥹</h1>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin: 20px 0;">
            <h2>📅 Your Selected Date:</h2>
            <p style="font-size: 1.2em; font-family: Bilbo Swash Caps, cursive; margin: 10px 0;">${selectedDate}</p>
            
            <h2>🎯 Your Date Choice:</h2>
            <p style="font-size: 1.2em; font-family: Bilbo Swash Caps, cursive; margin: 10px 0;"><strong>${dateChoice}</strong></p>
            <p style="font-style: italic;">${description}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; font-size: 1.2em;">
            <p>🎉 I'm so excited for our date!</p>
            <p>Get ready for an amazing time together! 💕</p>
            <p>PS: No raw onions, I promise! 😅</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToHer);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
