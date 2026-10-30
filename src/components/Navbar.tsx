import React, { useState } from 'react';
import { Download, Github, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-2xl">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sky-400 text-lg">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-white tracking-wide group-hover:text-sky-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] text-sky-400/80 font-mono tracking-wider">
                CSE-IoT • 2023–27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <a href="#about" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">About</a>
            <a href="#skills" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">Skills</a>
            <a href="#projects" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">Projects</a>
            <a href="#education" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">Education</a>
            <a href="#certifications" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">Certifications</a>
            <a href="#contact" className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-all">Contact</a>
          </div>

          {/* Quick CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={PERSONAL_INFO.resumeFile} 
              download="Dillu_Kumar_Chaubey_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500 hover:text-black transition-all duration-300 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </nav>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-2 p-4 bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl space-y-2 shadow-2xl">
            <a href="#about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">About</a>
            <a href="#skills" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">Skills</a>
            <a href="#projects" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">Projects</a>
            <a href="#education" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">Education</a>
            <a href="#certifications" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">Certifications</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-sky-500/10 hover:text-sky-400">Contact</a>
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a 
                href={PERSONAL_INFO.resumeFile} 
                download="Dillu_Kumar_Chaubey_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-black"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-sky-400">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
