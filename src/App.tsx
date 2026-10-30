import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { About } from './components/About';
import { Skills3D } from './components/Skills3D';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-black relative overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <About />
        <Skills3D />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
