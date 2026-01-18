# Santiago Dubon - Fintech Engineering Portfolio

A modern, high-performance portfolio website built to showcase expertise in Fintech Systems Engineering, specifically focusing on Supervision, Risk, and Compliance (SRC) technology.

![Status](https://img.shields.io/badge/Status-Operational-success)
![Framework](https://img.shields.io/badge/Next.js-16-black)
![Styling](https://img.shields.io/badge/Tailwind-CSS%204-blue)

## 🚀 Overview

This application serves as a comprehensive professional profile for a Senior Software Engineer specializing in building reliable, auditable, and event-driven systems for the financial sector. It moves beyond a traditional resume by offering an interactive, dashboard-like experience that highlights technical achievements and R&D projects.

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript

## ✨ Key Components

### 1. **Intro & Navigation**
- **Cinematic Hero Section**: Features animated fintech-themed iconography (Shield, Activity Charts, Servers) built with Framer Motion.
- **Sticky Navigation**: A glassmorphism-styled navigation bar that remains accessible throughout the scrolling experience.

### 2. **Technical Skills Display**
- Categorized grid layout showing expertise across Backend, Data, Cloud/DevOps, Observability, and Frontend domains.

### 3. **Interactive Case Studies**
- **Accordion Interface**: A clean, collapsible list of professional achievements ("Professional Achievements").
- **Details on Demand**: Clicking an entry expands to reveal the challenge, summary, and specific tech stack used (e.g., Kafka, .NET, AWS).

### 4. **Project Showcases**
- **Personal R&D**: Highlights specialized personal projects like "HawkEye" (AI-Integrated Fraud Detection), demonstrating passion outside of 9-to-5 work.
- **Leadership**: A section dedicated to mentorship, system design reviews, and documentation culture.

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd my-fintech-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Visit the site**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with smooth scroll & fonts
│   └── page.tsx         # Main landing page composition
├── components/
│   ├── AchievementsSection.tsx # Accordion-style case studies
│   ├── IntroSection.tsx        # Animated Hero entry
│   ├── LeadershipSection.tsx   # Mentorship & Arch Review
│   ├── NavBar.tsx              # Sticky top navigation
│   ├── PersonalProjects.tsx    # "HawkEye" R&D highlight
│   └── SkillsSection.tsx       # Tech stack grid
├── data/
│   └── case-studies.ts  # Typed data for achievements
```

## 🎨 Design System

The UI uses a custom "Fintech Dark Mode" theme:
- **Background**: Deep Zinc/Black (`#0a0a0a`)
- **Accent**: Fintech Gold/Warning for critical highlights (representing high-availability systems).
- **Typography**: `Geist` and `Geist Mono` for a clean, data-dense financial aesthetic.

---
© 2026 Santiago Dubon Sanchez. All Rights Reserved.
