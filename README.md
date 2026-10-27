# Evans Photography Studio

A premium photography studio website built with React and Vite.

## Local development

1. Copy `.env.example` to `.env` and update values as needed.
2. Install dependencies:
   npm install
3. Start the app:
   npm run dev
4. Build for production:
   npm run build
5. Preview the production build:
   npm run preview

## Admin access

The admin dashboard is protected by a token stored in `VITE_ADMIN_ACCESS_TOKEN`.
Keep the value in a local environment file or deployment secret manager. Do not commit real credentials.

The recommended setup is:
- create `.env` locally with a strong random token
- never publish the token in frontend code or repository files
- add `.env` to `.gitignore`

## Content configuration

Edit the configuration in `src/data/siteConfig.js` to change contact details, services, pricing, social links, opening hours, and the photography registry.

## Photography asset registry

This project includes a placeholder gallery system that is ready for real photography uploads. Replace the demo placeholder SVG files in `public/images/` and update the entries in `src/data/gallery.js` with the actual image paths, titles, categories, descriptions, and alt text.
