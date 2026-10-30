import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'ai' | 'frontend' | 'cpp' | 'iot'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedImg, setSelectedImg] = useState<string>('');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
    setSelectedImg(project.screenshot);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <span>03 // CODE IN ACTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Verified <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Discovered, analyzed, and audited from GitHub repositories, live production deployments, and AI/ML exploration.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'all' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('mern')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'mern' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            MERN Full-Stack
          </button>
          <button 
            onClick={() => setFilter('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'ai' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            AI / ML
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'frontend' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            Frontend &amp; UI
          </button>
          <button 
            onClick={() => setFilter('cpp')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'cpp' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            C++ / Algorithms
          </button>
          <button 
            onClick={() => setFilter('iot')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${filter === 'iot' ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}
          >
            IoT &amp; Research
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: Project) => (
          <div 
            key={project.id}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
          >
            {/* Visual Container */}
            <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-950">
              <img 
                src={project.screenshot} 
                alt={project.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'assets/github_avatar.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500 text-black shadow-md">
                  {project.status}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/90 text-sky-400 border border-sky-500/30">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {project.gallery && (
                <button 
                  onClick={() => handleOpenModal(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-sky-500 hover:text-black border border-slate-700 transition-colors shadow-lg"
                  title="Inspect Details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Highlights & Stack */}
              <div className="space-y-3 pt-1">
                <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 truncate">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{project.features[0]}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-800 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Website</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500">Repository Verified</span>
                )}
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      <ProjectModal 
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        selectedImg={selectedImg}
        onSelectImg={(img) => setSelectedImg(img)}
      />

    </section>
  );
};
