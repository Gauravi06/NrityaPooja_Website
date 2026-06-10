# Nrityapooja's Kathak Studio — Website

A multi-page portfolio website for Pooja Kukreja, Kathak Instructor, Amravati.

## Stack
- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **TypeScript**

## Pages
| Route | Page |
|-------|------|
| `/` | Home — hero, stats, featured photo, class preview, gallery strip, CTA |
| `/about` | About — bio, training, experience timeline |
| `/classes` | Classes — all 4 batches with full details |
| `/gallery` | Gallery — masonry grid with lightbox |
| `/contact` | Contact — enquiry form + all contact details |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## To Deploy on Vercel (Free)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com), sign in with GitHub
3. Click "Add New Project" → import your repo
4. Click **Deploy** — done! Live URL in seconds.

## Customisations Needed
- [ ] Add real batch timings & fees in `/app/classes/page.tsx`
- [ ] Wire up contact form to an email service (e.g. [EmailJS](https://emailjs.com) — free tier works great)
- [ ] Add more gallery photos to `/public/images/` and list them in `/app/gallery/page.tsx`
- [ ] Add a custom domain (optional) in Vercel settings
