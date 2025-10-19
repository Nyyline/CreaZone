# EmailJS Setup Guide for CreaZone Newsletter

## 📧 How to Set Up EmailJS for Newsletter Signup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** `{{subject}}`

**Content:**
```
Hello!

{{message}}

Best regards,
{{from_name}}

---
This email was sent from CreaZone Newsletter signup.
```

**Important:** Make sure your template uses these exact variable names:
- `{{to_email}}` - Recipient's email (MUST be in the "To" field of your template)
- `{{to_name}}` - Recipient's name
- `{{from_name}}` - Sender name
- `{{message}}` - Email content
- `{{subject}}` - Email subject

**CRITICAL:** In your EmailJS template settings, make sure:
1. **To field** is set to `{{to_email}}`
2. **From field** is set to your verified email
3. **Subject** is set to `{{subject}}`

4. **Copy the Template ID** (e.g., `template_xxxxxxx`)

### Step 3.5: Test Template Variables
Make sure your EmailJS template includes these variables:
- `{{to_email}}` - The subscriber's email address
- `{{from_name}}` - "CreaZone Newsletter" 
- `{{message}}` - Welcome message content
- `{{subject}}` - "Welcome to CreaZone Newsletter!"

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

### Step 5: Update Footer.jsx
Replace these values in `src/pages/Footer.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

### Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Go to your website's footer
3. Enter an email address
4. Click "Subscribe Now"
5. Check your email for the confirmation message

## 🎯 What Happens When Someone Subscribes

1. **User enters email** in the newsletter form
2. **EmailJS sends email** to the subscriber with:
   - Welcome message
   - Information about CreaZone newsletter
   - Confirmation of subscription
3. **Success message** shows to the user
4. **You receive notification** (if configured in EmailJS)

## 🔧 Template Variables Used

- `{{to_email}}` - The subscriber's email address
- `{{from_name}}` - "CreaZone Newsletter"
- `{{message}}` - Welcome message content
- `{{subject}}` - "Welcome to CreaZone Newsletter!"

## 📱 Features Included

- ✅ Real email sending via EmailJS
- ✅ Loading states with spinner
- ✅ Success/error feedback
- ✅ Form validation
- ✅ Mobile responsive design
- ✅ Professional email templates

## 🚀 Next Steps

1. Set up your EmailJS account
2. Replace the placeholder values in Footer.jsx
3. Test the newsletter signup
4. Customize the email template as needed
5. Consider adding email analytics

## 💡 Pro Tips

- Use a professional email address for your service
- Customize the email template with your branding
- Set up email analytics to track subscriptions
- Consider adding unsubscribe links for compliance
