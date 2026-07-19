# Contributing

Thanks for your interest in contributing to this portfolio project!

---

## 🔧 Local Setup

```bash
git clone https://github.com/kaveen14/Portfolio.git
cd Portfolio
npm install
npm run dev
```

---

## 📐 Code Conventions

| Rule | Detail |
|------|--------|
| **Components** | Functional components only, with hooks |
| **Naming** | PascalCase for components and files (`Hero.jsx`) |
| **Styling** | Tailwind utility classes — no inline `style={{}}` unless dynamic |
| **Data** | All content belongs in `src/data/portfolio.js`, not hardcoded in JSX |
| **Sub-components** | Extract reusable JSX into named sub-components at the bottom of the same file |
| **Comments** | Comment only non-obvious logic; avoid restating what the code says |

---

## 🌿 Branching

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code |
| `feature/<name>` | New features or pages |
| `fix/<name>` | Bug fixes |

---

## 📝 Pull Request Checklist

Before opening a PR, verify:

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] No console errors or warnings in the browser
- [ ] Layout is not broken on mobile (< 768px) or desktop (>= 1024px)
- [ ] Content changes were made in `src/data/portfolio.js`, not in component files

---

## 🐛 Reporting Issues

Open a GitHub issue and include:

1. A clear, specific title
2. Steps to reproduce (for bugs)
3. Browser and OS
4. Screenshot or recording if helpful
