import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>04 // ACADEMICS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Education <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Formal engineering degree at {PERSONAL_INFO.institution}, affiliated with {PERSONAL_INFO.affiliation}.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 opacity-30"></div>

        {/* B.Tech Milestone */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16 group">
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20 group-hover:scale-125 transition-transform">
            <div className="w-3 h-3 rounded-full bg-sky-400"></div>
          </div>

          <div className="w-full sm:w-1/2 sm:text-right pl-12 sm:pl-0 sm:pr-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              {PERSONAL_INFO.batch} • Ongoing
            </span>
            <h4 className="text-lg font-bold text-white mt-2">Bachelor of Technology (B.Tech)</h4>
            <p className="text-xs font-mono text-slate-400">{PERSONAL_INFO.branch}</p>
          </div>

          <div className="w-full sm:w-1/2 pl-12 sm:pl-12">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-sky-500/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-base">{PERSONAL_INFO.institution}</h5>
                  <p className="text-xs text-slate-400">Affiliated with {PERSONAL_INFO.affiliation}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Enrolled in the Department of Computer Science &amp; Engineering with specialization in Internet of Things. Coursework covers Data Structures &amp; Algorithms, OOP, Database Management Systems, Operating Systems, Computer Networks, and Microcontroller Sensor Telemetry.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-sky-300">Data Structures</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-purple-300">Computer Networks</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300">IoT Architectures</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-emerald-300">DBMS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Milestone */}
        <div className="relative flex flex-col sm:flex-row-reverse items-start sm:items-center gap-8 group">
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] z-20 group-hover:scale-125 transition-transform">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
          </div>

          <div className="w-full sm:w-1/2 sm:text-left pl-12 sm:pl-12 sm:pr-0">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30">
              Pre-Engineering Foundations
            </span>
            <h4 className="text-lg font-bold text-white mt-2">Higher Secondary &amp; STEM Foundations</h4>
            <p className="text-xs font-mono text-slate-400">Mathematics, Physics &amp; Computer Science</p>
          </div>

          <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-12">
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-base">Science &amp; Mathematics Focus</h5>
                  <p className="text-xs text-slate-400">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strong academic grounding in analytical mathematics and STEM fundamentals, fostering the computational mindset essential for advanced software engineering.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
