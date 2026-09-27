import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PortfolioGrid from './components/PortfolioGrid';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#151515] text-white font-mono flex flex-col selection:bg-[#e2ff00] selection:text-black">

      {/* Header */}
      <Navbar
        brand={portfolioData.brand}
      />

      {/* Main Works Showcase */}
      <main className="flex-grow">
        <PortfolioGrid
          categories={portfolioData.categories}
          projects={portfolioData.projects}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenProject={setSelectedProject}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#111111] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block w-24"></div>

          <div className="text-xl font-bold tracking-widest text-white uppercase">
            vladozzer
          </div>

          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider self-center sm:self-end">
            by fesh9
          </div>
        </div>
      </footer>

      {/* Project Video / Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
