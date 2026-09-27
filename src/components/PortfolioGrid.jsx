import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

export default function PortfolioGrid({ categories, projects, activeCategory, onSelectCategory, onOpenProject }) {
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-white/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#e2ff00] text-black shadow-lg shadow-[#e2ff00]/10 font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group cursor-pointer bg-[#1c1c1c] rounded-2xl overflow-hidden border border-white/10 hover:border-[#e2ff00]/60 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#e2ff00] text-black flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold uppercase text-white group-hover:text-[#e2ff00] transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#e2ff00]" />
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed font-sans">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags & Type */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] uppercase font-semibold text-[#e2ff00] bg-[#e2ff00]/10 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-gray-500 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 uppercase tracking-widest text-xs">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
