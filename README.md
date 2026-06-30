# Core TSC Technology Excellence Hub

Enterprise dashboard showcasing Core TSC's (a ValueMomentum company) insurance technology capabilities across Guidewire, Earnix, Duck Creek, OneShield, and CCM platforms.

## Requirements

- **Node.js 16.x** or newer (tested on Node 16.15+)
- npm 8+

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`. Deploy the contents of `dist/` to any static host.

## Hosting on IIS / Nginx / Apache

Since this is a single-page React app, configure your server to redirect all requests to `index.html`.

### Nginx
```nginx
location / {
  root /var/www/tsc-hub/dist;
  try_files $uri $uri/ /index.html;
}
```

### Apache — add `dist/.htaccess`
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### IIS — add `dist/web.config`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Tech Stack

| Package | Version | Notes |
|---------|---------|-------|
| React | 18.2.0 | Node 16 compatible |
| Vite | 4.5.x | Last version supporting Node 16 |
| Tailwind CSS | 3.4.x | PostCSS-based, Node 16 compatible |
| Framer Motion | 10.x | Node 16 compatible (v11+ requires Node 18) |
| TanStack Query | 4.x | Node 16 compatible (v5 requires Node 18) |
| Wouter | 2.12.x | Lightweight React router |
| Recharts | 2.12.x | Chart library |
| shadcn/ui | — | Radix UI + Tailwind component system |

## Pages

| Route | Page |
|-------|------|
| `/` | Executive Dashboard |
| `/competencies` | Competency Center |
| `/assets` | Assets & Accelerator Hub |
| `/innovation` | Innovation Lab |
| `/poc-showcase` | POC Showcase |
| `/demo-center` | Demo Center |
| `/success-stories` | Success Stories |
| `/settings` | Settings |

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Blue Ribbon | `#056BFC` | Primary actions, highlights |
| Apple Green | `#3FD534` | Success, growth indicators |
| Sunset Strip | `#FABD00` | Innovation accents, warnings |
| Black Cat | `#303030` | Sidebar, dark elements |
| Alabaster | `#F8F8FB` | Main background |

## Project Structure

```
tsc-hub/
├── public/
│   └── assets/          # Logo images
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui base components
│   │   ├── layout.jsx   # App shell (sidebar + header)
│   │   └── theme-provider.jsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities (cn helper)
│   ├── mock-data/       # All mock JSON data
│   ├── pages/           # One file per route
│   ├── App.jsx          # Router setup
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + CSS variables
├── index.html
├── vite.config.js       # Standard Vite config (no Replit plugins)
├── tailwind.config.js   # Tailwind v3 theme config
└── postcss.config.js    # PostCSS for Tailwind
```
