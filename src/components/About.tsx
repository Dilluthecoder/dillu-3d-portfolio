import React from 'react';
import { Terminal, Layers, Cpu, Wifi, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <span>01 // BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          About <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">My Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Engineering scalable web systems, mastering data structures, and expanding into intelligent AI/ML software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Story Card */}
        <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">B.Tech in {PERSONAL_INFO.branch}</h3>
                <p className="text-xs font-mono text-slate-400">{PERSONAL_INFO.institution} • {PERSONAL_INFO.batch}</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am an aspiring software engineer pursuing my B.Tech in <strong className="text-sky-300 font-semibold">{PERSONAL_INFO.branch}</strong> at {PERSONAL_INFO.institution} (affiliated with {PERSONAL_INFO.affiliation}).
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              My technical focus bridges practical full-stack software development with <strong className="text-purple-300 font-semibold">Artificial Intelligence &amp; Machine Learning (AI/ML)</strong>. From building production community applications like the <strong className="text-white font-medium">Musharwa Village Portal</strong> with the MERN stack to implementing optimized data structures in <strong className="text-white font-medium">C++</strong> and analyzing model training workflows, I focus on clean architecture and practical intelligence.
            </p>

            {/* AI/ML Learning Spotlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-300">
                <strong className="text-purple-200 block font-bold">Currently Learning: AI &amp; Machine Learning</strong>
                Hands-on study of supervised learning, model pipelines, data exploration with NumPy/Pandas, and neural network foundations.
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="block text-xl font-bold text-sky-400">{PERSONAL_INFO.batch}</span>
                <span className="text-xs text-slate-400">B.Tech Batch</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="block text-xl font-bold text-purple-400">Bihar, India</span>
                <span className="text-xs text-slate-400">Location Base</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 col-span-2 sm:col-span-1">
                <span className="block text-xl font-bold text-emerald-400">GEC Madhubani</span>
                <span className="text-xs text-slate-400">Campus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400 transition-all">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 mb-2 inline-block">Current Focus</span>
              <h4 className="font-bold text-white text-base mb-1">AI &amp; Machine Learning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exploring ML models, statistical learning, neural networks, and Python data pipelines.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 transition-all">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">MERN Full-Stack</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building responsive SPAs with React, Node.js, Express, and MongoDB Atlas databases.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">DSA &amp; Logic</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mastering data structures, algorithms, and complexity analysis using modern C++ &amp; STL.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base mb-1">IoT &amp; Hardware</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interfacing sensors, microcontroller firmware, and distributed network telemetry.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
