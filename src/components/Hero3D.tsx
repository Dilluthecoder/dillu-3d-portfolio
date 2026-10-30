import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Instagram, Youtube, Mail, Sparkles, Settings2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero3D: React.FC = () => {
  return (
    <section id="hero" className="min-h-[92vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Left Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Status Indicators: Open to Opps & AI/ML Learning */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide font-mono">Open to Opportunities</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Currently Learning: <strong>AI &amp; Machine Learning</strong></span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.shortName}.
              </span>
            </h1>
            <p className="font-mono text-sm sm:text-base text-sky-400/90 font-medium tracking-wide">
              &lt;{PERSONAL_INFO.role} • Full-Stack &amp; AI/ML Explorer /&gt;
            </p>
          </div>

          {/* Verified Tagline */}
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-sky-500/50 pl-4 py-1">
            "{PERSONAL_INFO.tagline}"
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Computer Science student specializing in <strong className="text-slate-200 font-medium">IoT</strong> at <strong className="text-slate-200 font-medium">{PERSONAL_INFO.institution}</strong> ({PERSONAL_INFO.batch}). Exploring <strong className="text-purple-300 font-medium">Artificial Intelligence &amp; Machine Learning</strong>, engineering full-stack MERN portals, and mastering C++ algorithms.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-400 to-blue-600 text-black hover:from-sky-300 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all duration-300"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Resume button with quick manager trigger */}
            <div className="flex items-center w-full sm:w-auto">
              <a 
                href={PERSONAL_INFO.resumeFile} 
                download="Dillu_Kumar_Chaubey_Resume.pdf"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-l-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-slate-700 hover:border-sky-500 hover:text-sky-300 shadow-md transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>
              <button 
                onClick={() => {
                  if (typeof (window as any).openResumeManager === 'function') {
                    (window as any).openResumeManager();
                  }
                }}
                title="Change or Update Resume"
                className="px-3.5 py-3.5 rounded-r-xl bg-slate-900/90 text-sky-400 border border-l-0 border-slate-700 hover:bg-slate-800 transition-colors shadow-md"
              >
                <Settings2 className="w-4 h-4" />
              </button>
            </div>

            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-900/40 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Social Quick Bar */}
          <div className="flex items-center gap-4 pt-2 text-slate-400 text-sm">
            <span className="text-xs text-slate-500 font-mono">CONNECT:</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" title="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-400 transition-colors" title="Email Dillu">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Right 3D Visual Center & GitHub Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            
            <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-spin" style={{ animationDuration: '24s' }}></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/25 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-10 rounded-full border border-cyan-500/20"></div>

            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-600/20 to-purple-600/20 blur-2xl"></div>

            {/* GitHub Profile Picture */}
            <div className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(56,189,248,0.35)] group">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900 relative">
                <img 
                  src={PERSONAL_INFO.photoFile} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = PERSONAL_INFO.avatarUrl;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="absolute -top-2 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-purple-300 border border-purple-500/30 flex items-center gap-1.5 shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>AI / ML Focus</span>
            </div>

            <div className="absolute top-1/2 -right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-sky-300 border border-sky-500/30 flex items-center gap-1.5 shadow-lg animate-bounce" style={{ animationDuration: '5s' }}>
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>MERN Stack</span>
            </div>

            <div className="absolute -bottom-2 right-6 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-lg animate-bounce" style={{ animationDuration: '4.5s' }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>CSE • IoT</span>
            </div>

            <div className="absolute bottom-1/4 -left-6 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg animate-bounce" style={{ animationDuration: '5.5s' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>C++ &amp; Python</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
