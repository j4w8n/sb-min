# Supabase Minimal Reproduction

For showcasing issues. Uses SvelteKit.

- setup a Supabase OAuth provider for your project (The repo uses `github` by default. If you setup another, change the passed-in provider string for the `OAuth Login` button in `src/routes/+page.svelte`)
- clone repo
- install dependencies
- create an `.env` file with `PUBLIC_SUPABASE_ANON_KEY=<insert value>` and `PUBLIC_SUPABASE_URL=<insert value>`
- run the app