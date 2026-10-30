import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  selectedImg: string;
  onSelectImg: (img: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, selectedImg, onSelectImg }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-950/90 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div>
            <h3 className="font-bold text-xl text-white">{project.name}</h3>
            <p className="text-xs font-mono text-sky-400">Verified Technical Architecture</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300">
          
          {/* Main Visual */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">SCREENSHOT PREVIEW</span>
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-video">
              <img src={selectedImg} alt={project.name} className="w-full h-full object-cover" />
            </div>

            {/* Gallery Thumbnails */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto py-2">
                {project.gallery.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => onSelectImg(img)}
                    className={`p-1 rounded-lg shrink-0 border transition-all ${selectedImg === img ? 'border-sky-500' : 'border-slate-800'}`}
                  >
                    <img src={img} alt="Thumb" className="w-16 h-10 object-cover rounded" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">PROJECT OVERVIEW</span>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">KEY ARCHITECTURAL FEATURES</span>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
              {project.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">TECHNOLOGY STACK</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-md text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-sky-500 text-black hover:bg-sky-400 transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Application</span>
            </a>
          )}

          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-950 text-slate-300 border border-slate-700 hover:text-white transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>
        </div>

      </div>
    </div>
  );
};
