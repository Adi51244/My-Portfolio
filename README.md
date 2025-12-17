# Aditya Kumar | Portfolio

A production-ready personal portfolio website for an AI/ML Engineer & Full-Stack Developer, built with modern web technologies and optimized for technical interviews.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)

## ✨ Features

- **Terminal/Pixel Aesthetic** - Retro-inspired design with Press Start 2P font
- **Animated Profile Background** - Orbiting gradient orbs with smooth animations
- **Mouse-Following Card Effects** - Interactive hover effects with radial gradients and particles
- **Responsive Design** - Mobile-first approach, works on all devices
- **Contact Form with EmailJS** - Sends styled HTML emails with sender details
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Type-Safe** - Full TypeScript implementation

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite 7** for blazing fast development
- **Tailwind CSS 4** for styling
- **Framer Motion** for smooth animations
- **EmailJS** for contact form
- **Lucide React** for icons
- **Devicons** for technology logos

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       └── TechTag.tsx
├── data/
│   └── content.ts       # All portfolio content
├── lib/
│   └── animations.ts    # Framer Motion animations
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adi51244/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Platforms

The project builds to static files and can be deployed on:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting

## 📝 Customization

### Update Content

All content is centralized in `src/data/content.ts`:
- Personal information
- Skills and categories
- Projects with metrics
- Experience entries

### Update Theme

Theme colors are defined in `src/index.css`:
- Primary: `#8b5cf6` (Violet)
- Background: `#0a0a0b` (Obsidian)
- Font: Press Start 2P (Pixel/Retro)
- Text colors and borders

### Add Resume

Place your resume PDF in the `public` folder as `Resume_AI_ML.pdf`. The download button in Hero section links to `/Resume_AI_ML.pdf`.

## 🎨 Design Philosophy

- **Terminal Aesthetic**: Pixel font (Press Start 2P) with obsidian dark theme
- **Engineering Focus**: Clean FAANG-style design highlighting technical skills
- **Metric-Driven**: Projects showcase quantified results (mAP, precision, recall)
- **Interactive Elements**: Mouse-following effects and animated backgrounds
- **Mobile-First**: Fully responsive design
- **Accessible**: Proper semantic HTML and focus states
- **Performance**: Optimized animations and lazy loading

## 📧 Contact Form Setup

The contact form uses EmailJS to send styled HTML emails:

1. Create an account at [EmailJS](https://emailjs.com)
2. Create an Email Service (Gmail recommended)
3. Create an Email Template with variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
4. Update credentials in `src/components/sections/Contact.tsx`:
   - Service ID
   - Template ID  
   - Public Key
5. Configure Reply-To in template settings to `{{reply_to}}`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Aditya Kumar**
- Email: adityakr00002@gmail.com
- GitHub: [@Adi51244](https://github.com/Adi51244)
- LinkedIn: [Aditya Kumar](https://www.linkedin.com/in/aditya-kumar-770118325/)

