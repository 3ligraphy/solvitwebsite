# EmailJS Setup Guide (Simple & Reliable!)

## Why EmailJS?
EmailJS is much easier than Gmail SMTP - no authentication issues, no app passwords, just simple configuration!

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** 
4. Connect your Gmail account (`3ligrphy@gmail.com`)
5. Note down your **Service ID** (e.g., `service_xyz123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

### Template Settings:
- **Template Name**: SolvIt Contact Form
- **Subject**: New Contact from {{from_name}} - {{company}}

### Email Template HTML:
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Service Interest:</strong> {{service}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the SolvIt AI contact form</em></p>
```

4. Set **"To Email"** to: `3ligrphy@gmail.com`
5. Click **"Save"**
6. Note down your **Template ID** (e.g., `template_abc456`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `user_xyz789`)
3. Copy this key

## Step 5: Update Environment Variables

Update your `.env.local` file with the values from EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xyz123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc456  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xyz789
CONTACT_EMAIL=3ligrphy@gmail.com
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your website's contact form
3. Fill out and submit a test message
4. Check your Gmail inbox (`3ligrphy@gmail.com`) for the email!

## Benefits of EmailJS vs Gmail SMTP

✅ **No authentication issues**  
✅ **No app passwords needed**  
✅ **No server-side configuration**  
✅ **Free plan includes 200 emails/month**  
✅ **Works from any domain**  
✅ **Easy template customization**  

## Troubleshooting

**If emails aren't sending:**
1. Check the browser console for error messages
2. Verify all three IDs are correct in `.env.local`
3. Make sure your EmailJS service is connected to the right Gmail account
4. Check EmailJS dashboard for sending statistics

**Free Plan Limits:**
- 200 emails per month
- EmailJS branding in emails
- For higher limits, upgrade to paid plan

## Production Deployment

When deploying to production:
1. Add all three environment variables to your hosting platform
2. Test the contact form after deployment
3. Monitor EmailJS dashboard for email delivery statistics

This setup is much more reliable than Gmail SMTP and requires no complex authentication! 🚀 