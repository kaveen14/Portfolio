# Kaveenkumar — Portfolio

> A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS** — dark green theme, smooth scroll, animated profile ring, and an interactive testimonials carousel.

![Preview](./Figma%20Design%20portfolio.png)

---

## ✨ Features

- **One-file content editing** — all text, links, and data live in `src/data/portfolio.js`
- **Dark green theme** matching the Figma design
- **Fully responsive** — mobile, tablet, and desktop
- **Rich animations:**
  - Page-load stagger on the Hero (text slides in, image slides from right)
  - Floating background particles in the hero section
  - Slow-spinning dashed profile ring
  - Floating tech badges (`animate-float`)
  - Scroll-reveal on every section (fade-up, slide-left/right)
  - Staggered card entrances with per-item delay
  - Counter animation on stats (counts 0 → target when entering viewport)
  - Testimonial card scales in + carousel controls fade in
  - Navbar shadow appears on scroll; nav links get underline slide on hover
  - Cards lift (`-translate-y-1`) on hover; buttons scale on hover/active
  - Animated blinking cursor for the mobile dropdown entrance
  - Respects `prefers-reduced-motion` — all animations disabled for accessibility
- **Clean code** — small, focused components, two custom hooks (`useInView`, `useCountUp`)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon library |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── profile.png          ← Your profile photo
│   └── cv.pdf               ← Your CV/resume (add this file)
│
├── src/
│   ├── data/
│   │   └── portfolio.js     ← ★ EDIT THIS FILE to change all content
│   │
│   ├── components/
│   │   ├── Navbar.jsx        Sticky top navigation
│   │   ├── Sidebar.jsx       Fixed left social icons
│   │   ├── Hero.jsx          Landing section with profile & stats
│   │   ├── Services.jsx      "What I Do" service cards
│   │   ├── About.jsx         About me section with info card
│   │   ├── Projects.jsx      Featured project showcase
│   │   ├── Experience.jsx    Professional timeline
│   │   ├── Testimonials.jsx  Client testimonials carousel
│   │   ├── Contact.jsx       Contact info & social links
│   │   └── Footer.jsx        Site footer
│   │
│   ├── App.jsx               Root layout component
│   ├── main.jsx              React entry point
│   └── index.css             Tailwind base + custom utilities
│
├── tailwind.config.js        Theme colors (change here to restyle)
├── vite.config.js
├── package.json
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kaveen14/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

---

## ✏️ How to Customize

**All content is in one file:** `src/data/portfolio.js`

| What to change | Where |
|---------------|-------|
| Name, role, tagline, email, phone, location | `personal` object |
| Navigation links | `navLinks` array |
| Social media links | `socialLinks` array |
| Floating tech badges (Hero) | `techBadges` array |
| Stats row (Hero) | `stats` array |
| About section text | `about` object |
| Service cards | `services` array |
| Project cards | `projects` array |
| Experience timeline | `experiences` array |
| Testimonials carousel | `testimonials` array |
| Footer text | `footer` object |

### Replace assets

| Asset | File to replace |
|-------|----------------|
| Profile photo | `public/profile.png` |
| CV / Resume | `public/cv.pdf` |

### Change the color theme

Edit `tailwind.config.js`:

```js
colors: {
  primary:      '#22c55e',   // ← Accent green (buttons, icons, highlights)
  'dark-bg':    '#080f08',   // ← Page background
  'dark-card':  '#0e180e',   // ← Card / panel background
  'dark-border':'#1c2c1c',   // ← Borders and dividers
},
```

---

## 📄 License

MIT © 2024 Kaveenkumar
