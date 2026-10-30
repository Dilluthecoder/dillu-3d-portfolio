import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube, Send, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Sender: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <span>06 // INITIATE TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Get in <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Contact</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
          Let's connect for software engineering opportunities, tech collaborations, or open-source discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all group block">
            <div className="p-3.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-mono text-slate-400 block">EMAIL DIRECT</span>
              <span className="font-bold text-white text-base group-hover:text-sky-300 transition-colors truncate block">
                {PERSONAL_INFO.email}
              </span>
              <span className="text-xs text-slate-500 truncate block">{PERSONAL_INFO.alternateEmail}</span>
            </div>
          </a>

          <a href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all group block">
            <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block">PHONE / WHATSAPP</span>
              <span className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </a>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block">LOCATION</span>
              <span className="font-bold text-white text-base">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-mono text-slate-400 block">SOCIAL NETWORKS</span>
            <div className="grid grid-cols-2 gap-3">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 hover:bg-sky-500/10 border border-slate-800 hover:border-sky-500/30 text-slate-300 hover:text-sky-400 transition-all text-xs font-medium">
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium">
                <Github className="w-4 h-4 text-slate-200" />
                <span>GitHub</span>
              </a>
              <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 hover:bg-pink-500/10 border border-slate-800 hover:border-pink-500/30 text-slate-300 hover:text-pink-400 transition-all text-xs font-medium">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
              <a href={PERSONAL_INFO.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/30 text-slate-300 hover:text-red-400 transition-all text-xs font-medium">
                <Youtube className="w-4 h-4 text-red-400" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 relative">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="form-name" className="block text-xs font-mono text-slate-300">YOUR NAME</label>
                <input 
                  type="text" 
                  id="form-name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="form-email" className="block text-xs font-mono text-slate-300">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  id="form-email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-500 text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="form-subject" className="block text-xs font-mono text-slate-300">SUBJECT</label>
              <input 
                type="text" 
                id="form-subject" 
                required 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-500 text-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="form-message" className="block text-xs font-mono text-slate-300">MESSAGE</label>
              <textarea 
                id="form-message" 
                rows={5} 
                required 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Dillu, I would like to discuss..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-400 to-blue-600 text-black hover:from-sky-300 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              <button 
                type="button" 
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800 hover:text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl text-xs font-mono text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ✓ Launching email application to send transmission to <strong>{PERSONAL_INFO.email}</strong>!
              </div>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};
