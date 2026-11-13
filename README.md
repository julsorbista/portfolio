# Juliana Orbista â€” portfolio hero

React + Vite, Tailwind CSS, Motion for React, and Lucide icons. Includes the original hero, About, Skills, five editorial project showcases, Education, Certifications, Contact, and Footer.

## Preview locally

Install Node.js 20.19+ or 22.12+, then run from this folder:

```sh
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173). Stop the server with Ctrl+C.

```sh
npm.cmd run build
npm.cmd run preview
```

The second command previews the production build, normally at http://127.0.0.1:4173.

## Content and assets

Edit `src/data/profile.js` for personal information, photo, education, certifications, and contact links. CV downloads are enabled using the supplied `public/Juliana_Orbista_CV.pdf`. Replace that file to update the downloadable CV.

Edit `src/data/projects.js` for project descriptions, technologies, features, contributions, dates, screenshots, and URLs. Project facts come from the supplied CV; the centralized skill groups match Juliana's confirmed categories. Place images in `public/projects/` and use paths such as `/projects/itechs.webp`. The phone presentation preserves each supplied image's proportions.

The CV supplies education, contact information, five project descriptions and contributions, and one certification. Eleven supplied screenshots cover all five projects, with thumbnail selection and an enlarged keyboard-accessible gallery. GitHub links are provided for iTECHS and PetAdopt; Morrow, Hospital, and Library use screenshots without repository links. Personal photos, live demo URLs, iTECHS and Morrow technology stacks, the library database technology, and certification issuer/date/link are still missing. These are not invented. Decorative orbital artwork is a local inline SVG; Google Fonts requires internet and falls back to system fonts.

Responsive styles include mobile navigation, visible keyboard focus, native modal focus management, and reduced-motion support.

## Verification

```sh
node scripts/check.mjs
npm.cmd run build
```

The component render check catches runtime import issues, duplicate IDs, missing section anchors and local assets, and invalid placeholder links. No lint command is configured in the original project.

For browser QA, preview at widths 320, 375, 768, 1024, and 1440px. Check for horizontal scrolling, use Tab to navigate, open/close the mobile menu with Escape, expand project notes with Enter, and confirm the Explore button and section links scroll below the sticky header. Enable reduced motion in browser/OS accessibility settings to check motion behavior.


