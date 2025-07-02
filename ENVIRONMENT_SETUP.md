# Environment Setup Guide

## Required Environment Variables

Create a `.env` file in your project root with the following variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Important Notes:

1. **NEVER expose secret keys in frontend code**
   - Secret keys should only be used in Supabase Edge Functions
   - Frontend only needs the publishable key

2. **CSP Issues**
   - If you're experiencing Content Security Policy errors, ensure your web server or proxy isn't blocking Stripe scripts
   - Stripe requires certain script-src permissions

3. **Testing**
   - Use test keys (pk_test_...) for development
   - Only use live keys (pk_live_...) in production

## Troubleshooting Loading Issues:

1. Check browser console for specific error messages
2. Verify all environment variables are set correctly
3. Ensure Supabase connection is working
4. Clear browser cache and localStorage if needed

## Getting Your Keys:

- **Supabase**: Go to your project settings → API
- **Stripe**: Go to Developers → API keys in your Stripe dashboard 