import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#02050e] relative z-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold text-sm">
            D
          </div>
          <div>
            <span className="font-bold text-white text-sm block">{PERSONAL_INFO.name}</span>
            <span className="text-xs text-slate-400 font-mono">B.Tech CSE-IoT • {PERSONAL_INFO.institution}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 max-w-md">
          "{PERSONAL_INFO.tagline}" • Designed &amp; Engineered with React 19, Three.js &amp; Tailwind CSS.
        </p>

        <div className="text-xs font-mono text-slate-500">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.shortName}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
