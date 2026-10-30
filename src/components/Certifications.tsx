import React from 'react';
import { Award, ShieldCheck, Code, Lock, Users, Trophy, Cpu, Compass } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
          <span>05 // CREDENTIALS &amp; RECOGNITION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Certifications &amp; <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Achievements</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Verified industry credentials and extracurricular leadership milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Certifications */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-sky-400" />
            <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <Code className="w-6 h-6" />}
                  {idx === 2 && <Lock className="w-6 h-6" />}
                  {idx === 3 && <Users className="w-6 h-6" />}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-base text-white">{cert.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Achievements */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">Extracurricular Leadership</h3>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 hover:-translate-y-0.5 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                      {idx < 2 ? '🏆' : (idx === 2 ? <Cpu className="w-5 h-5 text-sky-400" /> : <Compass className="w-5 h-5 text-purple-400" />)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">{ach.title}</h4>
                      <p className="text-xs text-slate-400">{ach.event}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300">
                    {ach.year}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
