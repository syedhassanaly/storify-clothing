# Storify Clothes

A fashion e-commerce front end built with Vite + React 19 + Tailwind v4.
No backend — products are hardcoded and the cart lives in `localStorage`,
but authentication is real, via Firebase.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Firebase project's config
npm run dev
```

A working demo Firebase config is already included in `.env` so the app
runs out of the box, but you should swap in your own project's keys
before deploying anywhere real (see `.env.example`).

## What's in here

- **Auth** — `src/context/AuthContext.jsx` wraps Firebase Auth: email/password
  register + login, Google/Facebook sign-in, forgot-password emails, email
  verification, and session persistence ("remember me"). `/account` is a
  protected route (`src/components/ProtectedRoute.jsx`) that redirects
  signed-out users to `/login`.
- **Cart** — `src/context/CartContext.jsx` holds cart state in a shared
  Context instead of `localStorage` polling, and persists to `localStorage`
  on change (with a native `storage` event listener for cross-tab sync).
- **Shared UI** — `src/components/shared/` has reusable `SectionHeading`,
  `StatsBanner` (animated count-up), `Testimonials`, and `FAQAccordion`
  pieces used across the About, Contact, and Shop pages.
- **Styling** — Tailwind v4 is CSS-first here: the theme (brand colors, the
  `xs:` breakpoint, custom keyframes) lives in `src/index.css` under
  `@theme`, not in a `tailwind.config.js`.

## Known limitations

- There's still no backend, so checkout, the contact form, and the
  newsletter signup don't actually submit anywhere.
- Firebase's Google/Facebook sign-in needs those providers enabled in your
  Firebase console (Authentication > Sign-in method) to work.
