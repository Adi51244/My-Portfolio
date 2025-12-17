import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
