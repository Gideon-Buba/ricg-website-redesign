# RICG — Rockbel International Centre for Governance

Official website for **Rockbel International Centre for Governance (RICG)**, a premier Nigerian ICT, Consulting, Training & Research firm.

## Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**
- **React Router DOM**

## Getting Started

Requires Node.js & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Clone the repo
git clone <YOUR_GIT_URL>

# Navigate into the project
cd ricg-website-redesign

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Build & Deploy

```sh
# Build for production
npm run build

# Deploy to Netlify (requires Netlify CLI)
netlify deploy --prod --dir=dist
```

The project includes a `public/_redirects` file for Netlify SPA routing support.

## Project Structure

```
src/
  components/   # Shared UI components (Header, Footer, etc.)
  pages/        # Route-level page components
  assets/       # Static assets bundled by Vite
public/         # Static files served as-is (logos, images)
```
