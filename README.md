# nigame.dev

Static site for the NI Game Dev Network. No build step: the contents of this folder are the site.

## Deploy to GitHub Pages

1. Create a repository (e.g. `nigdn/nigame.dev`) and push this folder's contents to the `main` branch root.
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Settings → Pages → Custom domain: `nigame.dev` (the `CNAME` file already sets this). Tick "Enforce HTTPS" once the certificate is issued.
4. At your DNS provider, point the apex to GitHub Pages:
   - A records for `nigame.dev`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - AAAA records: 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
   - CNAME for `www` → `<org>.github.io`
5. Add the domain in GitHub before switching DNS away from Super/Notion so it can verify; then switch DNS.

## Editing

- `index.html` — home page. Team list and social links live at the bottom of the file in the `team` and `socials` arrays.
- `community-standards.html` — standards page.
- `404.html` — served by GitHub Pages for any missing URL (uses absolute paths so it works at any depth).
- `assets/` — images. `ds/` — design tokens and component styles. `support.js` — page runtime (loads React from unpkg).
