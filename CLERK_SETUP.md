# Clerk Authentication Setup

This workshop template uses [Clerk](https://clerk.com) to authenticate users before they can access the workshop content.

## Initial Setup (For Template Maintainers)

The template is pre-configured with Clerk authentication. New repositories created from this template will inherit the Clerk integration.

## Setup for New Workshop Instances

When creating a new workshop from this template, follow these steps:

### 1. Create a Clerk Account

1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application for your workshop

### 2. Get Your Clerk Keys

1. In your Clerk dashboard, go to **API Keys**
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`) - **Keep this secret!**

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Clerk keys:
   ```bash
   CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
   ```

3. **Important**: Never commit the `.env` file to git (it's already in `.gitignore`)

### 4. Configure Clerk Dashboard

In your Clerk dashboard:

1. **Allowed redirect URLs**: Add your workshop URLs
   - Development: `http://localhost:3030` (for Slidev dev server)
   - Production: Your deployed URL (e.g., `https://workshop.yourcompany.com`)

2. **Sign-up/Sign-in options**: Configure how users authenticate
   - Email/Password
   - Social logins (Google, GitHub, etc.)
   - Magic links

3. **User management**:
   - Enable/disable public sign-ups
   - Add allowed email domains if restricting access
   - Configure invitation-only mode if needed

### 5. Test Authentication

#### Development Mode

1. Start Slidev development mode:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3030`
3. The slides will load with Clerk authentication embedded in the Slidev setup

#### Production-like Testing

1. Build and start the production server:
   ```bash
   npm run dev:server
   ```

2. Visit `http://localhost:3000`
3. You should be redirected to `/login`
4. Sign in with Clerk
5. After authentication, you'll see the workshop slides

## GitHub Codespaces Configuration

When using GitHub Codespaces:

1. Add your Clerk keys as Codespaces secrets:
   - Go to GitHub Settings → Codespaces → Secrets
   - Add `CLERK_PUBLISHABLE_KEY` with your publishable key value
   - Add `CLERK_SECRET_KEY` with your secret key value

2. Or configure them in your repository secrets:
   - Repository Settings → Secrets and variables → Codespaces
   - Add both secrets there

3. The devcontainer will automatically use these secrets

## Production Deployment

### Environment Variables

For production deployments, set both environment variables in your hosting platform:

```bash
CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_secret
```

### Common Platforms

**Render.com (Recommended):**

This repository includes a `render.yaml` Blueprint for easy deployment:

1. Push your repository to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Blueprint"
4. Connect your repository
5. Render will detect `render.yaml` and configure automatically
6. Add environment variables in the Render dashboard:
   - `CLERK_PUBLISHABLE_KEY` = your production publishable key
   - `CLERK_SECRET_KEY` = your production secret key
7. Deploy!

**Manual Render.com setup:**
- Dashboard → New → Web Service
- Connect your repository
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Add environment variables:
  - `CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`

**Vercel:**
```bash
vercel env add CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
```

**Netlify:**
- Site settings → Build & deploy → Environment variables
- Add `CLERK_PUBLISHABLE_KEY`
- Add `CLERK_SECRET_KEY`

**Railway:**
- Project → Variables
- Add `CLERK_PUBLISHABLE_KEY`
- Add `CLERK_SECRET_KEY`

### Production Keys

For production, use a live key instead of test key:

1. In Clerk Dashboard, switch to **Production** mode
2. Get the production publishable key (starts with `pk_live_`)
3. Update your production environment variables

## Restricting Access

### Email Domain Restrictions

To restrict access to specific email domains:

1. Clerk Dashboard → User & Authentication → Restrictions
2. Enable "Restrict sign-ups"
3. Add allowed email domains (e.g., `@yourcompany.com`)

### Invitation-Only Mode

To make the workshop invitation-only:

1. Clerk Dashboard → User & Authentication → Restrictions
2. Disable public sign-ups
3. Use Clerk's invitation system to invite specific users

### Manual User Management

1. Clerk Dashboard → Users
2. Manually add users with specific email addresses
3. Users will receive invitation emails

## Customization

### Branding

Customize the sign-in appearance:

1. Clerk Dashboard → Customization
2. Upload your logo
3. Customize colors to match your brand
4. Preview changes in real-time

### Authentication Methods

Enable/disable authentication providers:

1. Clerk Dashboard → User & Authentication → Email, Phone, Username
2. Choose required fields
3. Enable social connections (Google, GitHub, Microsoft, etc.)

## Troubleshooting

### "Missing Clerk Publishable Key" Error

- Verify `.env` file exists and contains both `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- Restart the development server after adding the keys
- Check that the publishable key starts with `pk_test_` or `pk_live_`
- Check that the secret key starts with `sk_test_` or `sk_live_`

### Users Can't Sign In

- Check allowed redirect URLs in Clerk Dashboard
- Verify the publishable key is correct
- Check browser console for Clerk errors

### Authentication Not Working in Production

- Confirm production environment variable is set
- Use production key (`pk_live_`) not test key
- Add production URL to allowed redirects in Clerk Dashboard

### Codespaces Issues

- Verify the secret is added to Codespaces settings
- Rebuild the devcontainer if needed
- Check that port 3030 is public/accessible

## Further Reading

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk JavaScript SDK](https://clerk.com/docs/references/javascript/overview)
- [Slidev Documentation](https://sli.dev)

## Support

- Clerk Support: [https://clerk.com/support](https://clerk.com/support)
- Clerk Discord: [https://clerk.com/discord](https://clerk.com/discord)
