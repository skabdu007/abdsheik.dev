# React.js & JavaScript Developer Portfolio

A modern, high-performance developer portfolio website engineered with **React.js (v18)**, **JavaScript (ES6+)**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with a futuristic dark aesthetic, electric blue and purple accents, an interactive code editor window, single-page navigation, and React Router project case studies.

Built specifically for free hosting on **GitHub Pages** (`https://YOUR-USERNAME.github.io/`) with automated CI/CD via **GitHub Actions**.

---

## 🚀 Live Demo

- **Production URL**: [https://skabdu007.github.io/](https://skabdu007.github.io/)
- **Repository**: [https://github.com/skabdu007/skabdu007.github.io](https://github.com/skabdu007/skabdu007.github.io)

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js 18** | Pure functional component architecture, Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`) |
| **JavaScript (ES6+)** | Modern JavaScript, async/await, closures, modules (Zero TypeScript) |
| **Vite** | Lightning-fast HMR and optimized production bundle compilation |
| **React Router DOM v6** | Client-side routing for `/` and deep case study routes `/projects/:slug` |
| **Tailwind CSS** | Custom design system tokens (`#050816`, electric blue, purple accents, glass cards) |
| **Framer Motion** | Fluid micro-interactions, page transitions, and floating UI animations |
| **Lucide React** | Modern, scalable icon library |
| **Axios** | REST API HTTP client abstraction |
| **GitHub Actions** | Automated CI/CD workflow deploying `dist/` directly to GitHub Pages |

---

## ✨ Features

- **Hero Section**: Two-column layout with status badges, bold typography, developer illustration, and interactive syntax-highlighted `CodeWindow`.
- **About Me**: Narrative summary emphasizing reusable component design, performance, and key career statistics.
- **Technical Skills**: Filterable grid across 6 categories (Core Technologies, React Ecosystem, Styling, API & Data, Tools, Concepts) with real icons and zero fake skill meters.
- **Career Experience**: Modern vertical timeline with responsibilities, achievements, and tech badges.
- **Featured & Selected Projects**: Flagship E-Commerce React Application + 5 project cards with image hover zoom, GitHub and Live Demo buttons.
- **Deep Architecture Case Studies**: Dynamic `/projects/:slug` routing breaking down problem, solution, features, React data flow (`Page → Components → Hooks → Services → API → State`), and metrics.
- **Services Matrix**: 4 numbered services (01 React Development, 02 JavaScript Development, 03 Frontend Development, 04 API Integration).
- **Education & Certifications**: Verified credentials and degree timelines with relevant coursework tags.
- **Interactive Contact Form**: Accessible client-side validated form with loading, success, and error states.
- **Accessibility & SEO**: Semantic HTML5, WCAG contrast compliance, `prefers-reduced-motion` support, Open Graph, Twitter cards, and JSON-LD structured data.

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages deployment workflow
│
├── public/
│   ├── assets/
│   │   ├── profile.png         # Developer illustration portrait
│   │   ├── projects/           # Project preview SVGs/mockups
│   │   └── certificates/       # Certificate preview SVGs
│   ├── Resume/                 # Downloadable CV PDF
│   ├── favicon.svg             # Modern developer favicon
│   ├── robots.txt              # Crawler directives
│   └── sitemap.xml             # Search engine sitemap
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navigation with mobile drawer
│   │   ├── Hero.jsx            # Two-column hero with badges and CTAs
│   │   ├── CodeWindow.jsx      # Interactive code editor window
│   │   ├── DeveloperIllustration.jsx # Illustrated avatar with floating badges
│   │   ├── About.jsx           # Philosophy statement & statistics
│   │   ├── Skills.jsx          # Technical skills section with filtering
│   │   ├── SkillCard.jsx       # Reusable skill card
│   │   ├── Experience.jsx      # Modern vertical timeline
│   │   ├── Projects.jsx        # Featured project + project cards
│   │   ├── ProjectCard.jsx     # Interactive project card with zoom effect
│   │   ├── Education.jsx       # Academic timeline and coursework
│   │   ├── Certifications.jsx  # Verified certification cards
│   │   ├── Services.jsx        # 4 distinct numbered services
│   │   ├── Contact.jsx         # Contact info & validated inquiry form
│   │   ├── Footer.jsx          # Minimal footer with copyright & links
│   │   ├── SectionHeading.jsx  # Reusable section title component
│   │   ├── AnimatedContainer.jsx # Framer Motion scroll wrapper
│   │   ├── TechBadge.jsx       # Rounded pill technology badge
│   │   ├── SocialLinks.jsx     # Social link bar (GitHub, LinkedIn, Email)
│   │   └── Button.jsx          # Reusable button with variants & sizes
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Main single-page portfolio layout
│   │   ├── Projects.jsx        # Projects archive page with search & filters
│   │   ├── ProjectDetails.jsx  # Dynamic case study page (/projects/:slug)
│   │   └── NotFound.jsx        # 404 page with return link
│   │
│   ├── data/
│   │   ├── personal.js         # Centralized profile info, bio, stats, and contact
│   │   ├── projects.js         # Complete project specifications & architecture
│   │   ├── skills.js           # 6 skill categories and descriptions
│   │   ├── experience.js       # Timeline roles, achievements, and tech stacks
│   │   ├── education.js        # Degrees and relevant coursework
│   │   ├── certifications.js   # Verified certificate entries
│   │   └── services.js         # 4 frontend service offerings
│   │
│   ├── App.jsx                 # Routes & smooth hash navigation
│   ├── main.jsx                # React root mount
│   └── index.css               # Design system tokens, variables & utilities
│
├── .gitignore
├── index.html                  # SEO, meta tags, and JSON-LD Person schema
├── package.json                # React, Vite, Tailwind, Framer Motion dependencies
├── postcss.config.js
├── tailwind.config.js          # Design system theme extensions
├── vite.config.js              # Vite configuration (base: "/")
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or 20 recommended)
- `npm` (version 9 or 10)

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/skabdu007/skabdu007.github.io.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) to view the site in your browser.

### Production Build

Compile the optimized production bundle:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Free GitHub Pages Deployment

This project is configured for automated zero-cost deployment to GitHub Pages via **GitHub Actions**.

### Step 1: Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Deploy React portfolio"
git branch -M main
git remote add origin https://github.com/skabdu007/skabdu007.github.io.git
git push -u origin main
```
git push -u origin main
```

### Step 3: Enable GitHub Pages via GitHub Actions
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your portfolio to `https://YOUR-USERNAME.github.io/` every time you push to `main`!

---

## 🎨 Customization Guide

All portfolio content is decoupled into clean, easily editable data files under `src/data/`:

### 1. Developer Name, Bio & Contact Information
Edit [`src/data/personal.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/personal.js):
- `name`: Your full name.
- `role`: Professional identity (e.g. `"React.js & JavaScript Developer"`).
- `bio`: Short professional introduction.
- `about.paragraphs`: Detailed career overview.
- `about.stats`: Numeric career statistics (Projects, Experience, etc.).
- `contact.email`, `contact.github`, `contact.linkedin`: Your direct social links.

### 2. Profile Illustration / Avatar
Replace the image located at:
```text
public/assets/profile.png
```
Or update `personalData.profileImage` in `src/data/personal.js`.

### 3. Curriculum Vitae (Resume)
Place your resume PDF at:
```text
public/Resume/SHEIK ABDULLA_CV.pdf
```
Or adjust `resumeUrl` in `src/data/personal.js`.

### 4. Projects & Case Studies
Edit [`src/data/projects.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/projects.js):
- Change `title`, `description`, `technologies`, `github`, and `demo` links.
- Add or update architecture flow, problems, and solutions.
- Add your own project mockup images to `public/assets/projects/`.

### 5. Technical Skills
Edit [`src/data/skills.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/skills.js):
- Add or modify skills under the 6 categories.
- Assign icons from Lucide React.

### 6. Career Experience
Edit [`src/data/experience.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/experience.js):
- Update `role`, `company`, `duration`, `responsibilities`, and `technologies`.

### 7. Education & Certifications
Edit [`src/data/education.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/education.js) and [`src/data/certifications.js`](file:///d:/New%20folder%20(2)/portfolio/src/data/certifications.js).

---

## 📄 License

This portfolio is open-source software licensed under the MIT License.
