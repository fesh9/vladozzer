import React, { useEffect } from 'react';
import { X, Calendar, User, Briefcase } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#1c1c1c] border border-white/20 rounded-2xl overflow-hidden shadow-2xl my-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#e2ff00] hover:text-black text-white p-2.5 rounded-full transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Section */}
        <div className="relative aspect-video bg-black w-full">
          <video
            controls
            autoPlay
            playsInline
            src={project.videoUrl}
            poster={project.coverImage}
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Project Meta & Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#e2ff00] bg-[#e2ff00]/10 px-2.5 py-1 rounded">
                {project.type}
              </span>
              {project.tags?.map((t, idx) => (
                <span key={idx} className="text-xs text-gray-400 font-mono">
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 font-medium font-sans">
              {project.subtitle}
            </p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 font-sans">
            {project.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
            {project.client && (
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                <span className="text-gray-500 uppercase block mb-1 flex items-center gap-1 font-mono">
                  <User className="w-3.5 h-3.5 text-[#e2ff00]" /> Client
                </span>
                <span className="text-white font-semibold">{project.client}</span>
              </div>
            )}

            {project.year && (
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                <span className="text-gray-500 uppercase block mb-1 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#e2ff00]" /> Year
                </span>
                <span className="text-white font-semibold">{project.year}</span>
              </div>
            )}

            {project.role && (
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 sm:col-span-1">
                <span className="text-gray-500 uppercase block mb-1 flex items-center gap-1 font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-[#e2ff00]" /> Role
                </span>
                <span className="text-white font-semibold">{project.role}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
