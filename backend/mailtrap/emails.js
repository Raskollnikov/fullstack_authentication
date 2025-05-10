
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplates.js";
import { transporter } from "../utils/nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const html = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

    const info = await transporter.sendMail({
      from: `"Arsen" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html,
    });

    console.log("Verification email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending verification email", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome Email</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 30px;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
    <tr>
      <td style="background-color: #4CAF50; color: white; text-align: center; padding: 24px;">
        <h1 style="margin: 0; font-size: 26px;">Welcome🎉</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px; color: #1e293b;">
        <p style="font-size: 18px; margin-bottom: 20px;">Hi ${name},</p>
        <p style="font-size: 16px; line-height: 1.6;">
          We're absolutely thrilled to have you on board. Whether you're here to explore, learn, or build something amazing—we’ve got you covered.
        </p>
        <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
          If you have any questions, feel free to reach out to our support team anytime.
        </p>
        <p style="font-size: 16px; margin-top: 40px;">Welcome again</p>
        <p style="font-size: 16px;"><strong>— The Lafsha Team</strong></p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; background-color: #f1f5f9; color: #94a3b8; font-size: 14px; padding: 16px;">
        Need help? Contact us at <a href="mailto:support@example.com" style="color: #4CAF50;">support@example.com</a>
      </td>
    </tr>
  </table>
</body>
</html>
`;


    const info = await transporter.sendMail({
      from: `"Arsen" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to our platform!",
      html,
    });

    console.log("Welcome email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const html = PASSWORD_RESET_REQUEST_TEMPLATE.replaceAll("{resetURL}", resetURL);

    const info = await transporter.sendMail({
      from: `"Arsen" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset your password",
      html,
    });

    console.log("Password reset email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email", error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 30px; margin: 0;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05); overflow: hidden;">
    <tr>
      <td style="background-color: #4CAF50; color: white; text-align: center; padding: 24px 0;">
        <h1 style="margin: 0; font-size: 24px;">Password Reset Successful</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px; color: #1e293b;">
        <p style="font-size: 16px; margin-bottom: 20px;">Hi there,</p>
        <p style="font-size: 16px; margin-bottom: 20px;">
          We're letting you know that your password was successfully changed. If you made this change, you don't need to do anything else.
        </p>
        <p style="font-size: 16px; margin-bottom: 20px;">
          If you didn’t change your password, please contact our support team immediately.
        </p>
        <p style="font-size: 16px; margin-top: 40px;">— The Lafsha Team</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; background-color: #f1f5f9; color: #94a3b8; font-size: 14px; padding: 16px;">
        If you didn’t request this change, please contact us at <a href="mailto:support@example.com" style="color: #4CAF50;">support@example.com</a>
      </td>
    </tr>
  </table>
</body>
</html>
`;


    const info = await transporter.sendMail({
      from: `"Arsen" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your password has been reset",
      html,
    });

    console.log("Reset success email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending reset success email", error);
    throw new Error(`Error sending reset success email: ${error.message}`);
  }
};
