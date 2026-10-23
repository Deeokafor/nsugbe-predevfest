import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="w-full bg-[#060e20]/50 border-t border-[#434655]/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#7bd0ff] font-label-badge text-[11px] font-mono uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">deployed_code</span>
              <span>Case Studies</span>
            </div>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd]">
              Projects That Bring Ideas to Life
            </h2>
          </div>
          <p className="font-body-md text-[15px] text-[#c3c6d7] max-w-lg">
            Selected applications exploring real-world student needs, data workflows, and modern web interfaces built with attention to design craft.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => {
            const hasError = failedImages[project.id];
            const imgSrc = hasError ? project.hotlinkImage : project.image;

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-xl overflow-hidden bg-[#171f33] border border-[#434655]/50 hover:border-[#7bd0ff]/50 transition-all duration-300 group shadow-lg"
              >
                {/* Mockup Display Frame */}
                <div
                  onClick={() => onOpenCaseStudy(project)}
                  className="relative w-full aspect-[16/10] bg-[#222a3d] overflow-hidden border-b border-[#434655]/30 cursor-pointer"
                >
                  <img
                    alt={project.title}
                    src={imgSrc}
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent opacity-40"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#060e20]/80 backdrop-blur-md border border-[#434655]/40 font-label-badge text-[11px] text-[#7bd0ff] font-mono">
                    {project.categoryBadge}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3
                      onClick={() => onOpenCaseStudy(project)}
                      className="font-headline-sm text-lg text-[#dae2fd] group-hover:text-[#7bd0ff] transition-colors font-semibold cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-1">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#222a3d] text-[#7bd0ff] font-label-badge text-[11px] font-mono border border-[#434655]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#434655]/30">
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#2563eb] text-[#eeefff] font-body-sm text-xs font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all cursor-pointer"
                      >
                        <span>View Case Study</span>
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_outward
                        </span>
                      </button>

                      {project.id === 'aurastudy' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Source Code"
                          className="inline-flex items-center justify-center p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">code</span>
                        </a>
                      )}

                      {project.id === 'flux-finance' && (
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          title="Live Preview"
                          className="inline-flex items-center justify-center p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      )}

                      {project.id === 'uniswap-marketplace' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Repository"
                          className="inline-flex items-center justify-center p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">folder_zip</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
