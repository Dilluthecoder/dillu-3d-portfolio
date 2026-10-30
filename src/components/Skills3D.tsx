import React, { useState } from 'react';
import { CheckCircle, Code2, FileCode, Coffee, Atom, Server, Database, Braces, Layout, Network, HardDrive, GitBranch, Radio } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills3D: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'programming' | 'web' | 'cs' | 'tools'>('all');

  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'FileCode': return <FileCode className="w-6 h-6" />;
      case 'Coffee': return <Coffee className="w-6 h-6" />;
      case 'Atom': return <Atom className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Braces': return <Braces className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'HardDrive': return <HardDrive className="w-6 h-6" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" />;
      case 'Radio': return <Radio className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
          <span>02 // CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Technical <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Skill Stack</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Verified programming languages, CS fundamentals, web technologies, and developer tools. No invented metrics.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'all' ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            All Skills
          </button>
          <button 
            onClick={() => setFilter('programming')} 
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'programming' ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Programming
          </button>
          <button 
            onClick={() => setFilter('web')} 
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'web' ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setFilter('cs')} 
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'cs' ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            CS Core
          </button>
          <button 
            onClick={() => setFilter('tools')} 
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'tools' ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Tools &amp; IoT
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill: Skill, idx: number) => (
          <div 
            key={idx} 
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {getIcon(skill.icon)}
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-400">
                {skill.category.toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">{skill.name}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {skill.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>{skill.highlight}</span>
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
