import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};

const transporter =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT ?? 587) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })
    : null;

const recipientEmail = process.env.CONTACT_RECIPIENT ?? 'ptsfinserv369@gmail.com';

export const sendContactEmail = async (payload: ContactPayload) => {
  if (!transporter) {
    console.info('📨 Contact submission (email disabled, logged for review):', payload);
    return;
  }

  await transporter.sendMail({
    from: `"PTS Finserv" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    subject: `New enquiry from ${payload.name}`,
    text: `Name: ${payload.name}\nPhone: ${payload.phone}\nMessage: ${payload.message}`,
    html: `
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    `
  });
};
