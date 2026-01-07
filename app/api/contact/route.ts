import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const safeMessage = escapeHtml(message);

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Contact Message</title>
        </head>

        <body style="
        margin:0;
        padding:0;
        background-color:#f1f3f8;
        font-family:Arial, Helvetica, sans-serif;
        ">
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
            <td align="center" style="padding:40px 16px;">
                <!-- Card -->
                <table width="600" cellpadding="0" cellspacing="0" style="
                background:#ffffff;
                border-radius:12px;
                border-collapse:separate;
                box-shadow:0 10px 30px rgba(0,0,0,0.08);
                overflow:hidden;
                ">
                <!-- Header -->
                <tr>
                    <td style="
                    background:linear-gradient(135deg,#7c6cff,#5b4bff);
                    color:#ffffff;
                    padding:24px;
                    text-align:center;
                    font-size:22px;
                    font-weight:bold;
                    ">
                    📬 New Contact Message
                    </td>
                </tr>

                <!-- Content -->
                <tr>
                    <td style="padding:28px 32px;color:#2d2d2d;">
                    <p style="
                        margin:0 0 20px;
                        font-size:16px;
                        color:#555;
                    ">
                        You have received a new inquiry from your website.
                    </p>

                    <!-- Info table -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="
                        border-collapse:collapse;
                        margin-bottom:24px;
                        font-size:15px;
                    ">
                        <tr>
                        <td style="padding:8px 0;color:#888;width:80px;">Name</td>
                        <td style="padding:8px 0;font-weight:600;color:#111;">
                            ${escapeHtml(name)}
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:8px 0;color:#888;">Email</td>
                        <td style="padding:8px 0;">
                            <a href="mailto:${escapeHtml(email)}" style="
                            color:#5b4bff;
                            text-decoration:none;
                            font-weight:500;
                            ">
                            ${escapeHtml(email)}
                            </a>
                        </td>
                        </tr>
                    </table>

                    <!-- Message -->
                    <p style="
                        margin:0 0 8px;
                        font-size:15px;
                        font-weight:600;
                        color:#111;
                    ">
                        Message
                    </p>

                    <div style="
                        background:#f7f8ff;
                        border:1px solid #e4e7ff;
                        border-radius:8px;
                        padding:16px;
                        font-size:14px;
                        line-height:1.6;
                        color:#333;
                        white-space:pre-wrap;
                        word-break:break-word;
                    ">
                        ${safeMessage}
                    </div>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="
                    background:#fafafa;
                    text-align:center;
                    padding:16px;
                    font-size:13px;
                    color:#888;
                    ">
                    © 2026 Trân Hồ 
                    </td>
                </tr>
                </table>
            </td>
            </tr>
        </table>
        </body>
        </html>
        `;

    await resend.emails.send({
      from: "Tran's Portfolio <system@skymart.id.vn>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New contact from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
