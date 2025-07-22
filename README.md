# QuickTalk React + Vite

This project uses [Vite](https://vitejs.dev) with React and Tailwind CSS. Follow these steps to set up your environment, run the development server and deploy the app.

## Setup

1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url>
   cd runclub
   npm install
   ```
2. Configure environment variables by creating a `.env` file in the project root. Any variable prefixed with `VITE_` will be exposed to the client. Example:
   ```bash
   VITE_API_URL=https://api.example.com
   VITE_APP_TITLE=QuickTalk
   ```

## Running the Dev Server

Start the local development server with:
```bash
npm run dev
```
This opens the app at `http://localhost:5173/` with hot reloading.

## Linting

To lint the codebase run:
```bash
npm run lint
```

## Building for Production

Create an optimized build with:
```bash
npm run build
```
The output is placed in the `dist` directory.

## Previewing the Build

You can preview the production build locally using:
```bash
npm run preview
```

## Deploy

Upload the contents of the `dist` folder to your preferred static hosting service (such as Netlify, Vercel or GitHub Pages). Ensure any required environment variables are configured in your hosting provider.
