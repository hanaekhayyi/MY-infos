import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ---------------------------------------------------------------------------
// GitHub Pages configuration
// ---------------------------------------------------------------------------
// If you deploy to a project page, e.g. https://<username>.github.io/portfolio/
// set base to '/portfolio/' (replace "portfolio" with your repo name).
//
// If you deploy to a user/organization page, e.g. https://<username>.github.io/
// (repo named exactly "<username>.github.io"), set base to '/'.
// ---------------------------------------------------------------------------
const REPO_NAME = 'MY-infos'; // <-- change this to your repository name
const IS_USER_SITE = false; // <-- set to true if your repo is "<username>.github.io"

export default defineConfig({
  plugins: [react()],
  base: IS_USER_SITE ? '/' : `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
  },
});
