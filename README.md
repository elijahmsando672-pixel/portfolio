# Elijah Portfolio

Modern portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - run local dev server
- `npm run lint` - run ESLint checks
- `npm run build` - create production build
- `npm run start` - run production server

## Contact form setup

The contact form posts to `app/api/contact/route.ts` and forwards messages to FormSubmit.

- Optional env var: `CONTACT_TARGET_EMAIL` (defaults to `elijahmsando672@gmail.com`)
- Optional env var: `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap host

## SEO and metadata

- `src/app/sitemap.ts` generates `sitemap.xml`
- `src/app/robots.ts` generates `robots.txt`
- `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` generate social preview images
