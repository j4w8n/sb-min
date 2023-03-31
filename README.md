# Supabase Minimal Reproduction

For showcasing issues. Uses SvelteKit.

- clone repo
- install dependencies
- create an `.env` file with `PUBLIC_SUPABASE_ANON_KEY=<insert value>` and `PUBLIC_SUPABASE_URL=<insert value>`
- setup a Supabase OAuth provider for your project (The repo uses `github` by default. If you setup another, change the passed-in provider string for the `OAuth Login` button in `src/routes/+page.svelte`)
- run the app (ex, `pnpm run dev`)
- open an empty browser tab, then open dev tools and view the Console
- browse to http://localhost:5173
