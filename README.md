# Vaman Jyoti — Personal Portfolio

A modern, responsive personal portfolio website built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **TypeScript**. Features a dark futuristic theme with glassmorphism effects, smooth animations, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)

## 🔗 Live Demo
View the live site at: https://lovable.dev/projects/dedcc88b-45c6-4c9f-8fd4-3b42a2178454


## ✨ Features
- **Responsive Design** — Looks great on mobile, tablet, and desktop
- **Dark Futuristic Theme** — Midnight indigo palette with neon accents
- **Glassmorphism UI** — Translucent cards with backdrop blur effects
- **Animated Hero Section** — Orbiting dots, floating skill badges, conic gradient ring
- **Smooth Scroll Navigation** — Sticky nav with anchor links
- **Project Showcase** — 6 featured projects with gradient thumbnails
- **Skills Section** — Organized by category with hover animations
- **Certificates Display** — List of earned certifications
- **Contact Form** — Direct email integration via mailto
- **Social Links** — GitHub, LinkedIn, and Email icons

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI library |
| TanStack Start | Full-stack React framework (SSR/SSG) |
| TanStack Router | File-based routing |
| Tailwind CSS v4 | Utility-first styling |
| TypeScript | Type safety |
| Vite 7 | Build tool |
| Lucide React | Icon library |

## 📁 Project Structure

```
src/
├── components/
│   ├── Portfolio.tsx        # Main portfolio component (all sections)
│   └── ui/                  # shadcn/ui components
├── routes/
│   ├── __root.tsx           # Root layout with SEO meta tags
│   └── index.tsx            # Homepage route
├── styles.css               # Global styles, design tokens, animations
├── router.tsx               # TanStack Router setup
├── start.ts                 # Start instance configuration
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vamanjyoti/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
bun run build
# or
npm run build
```

## 📝 Customization Guide

### Update Personal Information

Edit `src/components/Portfolio.tsx`:

- **Name & Title** — Lines 196-199 (hero section)
- **Bio** — Lines 201-204 (hero description)
- **About Section** — Lines 271-276
- **Email** — Line 121 and Line 388 (contact email)
- **Social Links** — Lines 223-228 (GitHub, LinkedIn)
- **Stats** — Lines 279-282 (projects count, certificates count, etc.)

### Update Projects

Edit the `PROJECTS` array in `src/components/Portfolio.tsx` (Lines 53-96):

```typescript
const PROJECTS = [
  {
    title: "Your Project Name",
    desc: "Short description of the project.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    emoji: "🚀",
  },
  // ... add more
];
```

### Update Skills

Edit the `SKILLS` array in `src/components/Portfolio.tsx` (Lines 30-51):

```typescript
const SKILLS = [
  {
    icon: Code2,
    title: "Your Skill Category",
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // ... add more
];
```

### Update Certificates

Edit the `CERTIFICATES` array in `src/components/Portfolio.tsx` (Lines 98-106).

### Replace Profile Photo

1. Add your photo to `src/assets/`
2. Update the import at the top of `Portfolio.tsx`:
   ```typescript
   import yourPhoto from "@/assets/your-photo.jpg";
   ```
3. Update the `<img>` tag on Line 243-245 to use `yourPhoto` instead of `vamanPhoto`

### Update SEO Meta Tags

Edit `src/routes/__root.tsx` (Lines 71-93):

```typescript
head: () => ({
  meta: [
    { title: "Your Name — Your Title" },
    { name: "description", content: "Your description here." },
    // ... update OG tags too
  ],
}),
```

### Update Colors / Theme

Colors are defined as CSS variables in `src/styles.css`:

- **Background** — `--background`
- **Primary** — `--primary`
- **Accent** — `--accent`
- **Card surfaces** — `--card`

All colors use `oklch()` for perceptually uniform color spaces.

## 🎨 Design System

| Token | Purpose |
|-------|---------|
| `--background` | Page background |
| `--foreground` | Main text color |
| `--card` | Card/panel backgrounds |
| `--primary` | Primary buttons, links |
| `--accent` | Highlights, hover states |
| `--muted` | Secondary backgrounds |
| `--border` | Subtle dividers |

## 📬 Contact

- **Email**: [vamanjyoti07@gmail.com](mailto:vamanjyoti07@gmail.com)
- **LinkedIn**: [linkedin.com/in/vamanjyoti](https://www.linkedin.com/in/vamanjyoti)
- **GitHub**: [github.com/vamanjyoti](https://github.com/vamanjyoti)


