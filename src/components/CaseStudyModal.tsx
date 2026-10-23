import React, { useState } from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060e20]/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#171f33] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Header Bar */}
        <div className="h-16 px-6 bg-[#222a3d] border-b border-[#434655]/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#0b1326] text-[#7bd0ff] font-label-badge text-xs font-mono border border-[#434655]/50">
              {project.categoryBadge}
            </span>
            <h2 className="font-headline-sm text-base sm:text-lg text-[#dae2fd] font-semibold truncate max-w-xs sm:max-w-md">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? 'Standard view' : 'Expand preview'}
              className="p-2 rounded-lg text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                {isZoomed ? 'zoom_in_map' : 'fullscreen'}
              </span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2 rounded-lg text-[#c3c6d7] hover:text-[#ffb4ab] hover:bg-[#2d3449] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          {/* Main Visual Display */}
          <div className="relative w-full rounded-xl overflow-hidden bg-[#060e20] border border-[#434655]/50 shadow-inner group">
            <img
              alt={`${project.title} UI Preview`}
              src={imageError ? project.hotlinkImage : project.image}
              onError={() => {
                if (!imageError) setImageError(true);
              }}
              className={`w-full object-contain transition-all duration-300 ${
                isZoomed ? 'max-h-[650px] scale-100' : 'max-h-[420px]'
              }`}
            />
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#060e20]/80 backdrop-blur-md border border-[#434655]/50 flex items-center gap-2 font-mono text-xs text-[#7bd0ff]">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
              High-Fidelity Interface
            </div>
          </div>

          {/* Overview & Core Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-headline-sm text-lg text-[#dae2fd] font-semibold">
                Project Overview &amp; Architecture
              </h3>
              <p className="font-body-md text-sm sm:text-base text-[#c3c6d7] leading-relaxed">
                {project.overview}
              </p>

              <div className="pt-2">
                <h4 className="font-label-caps text-xs text-[#8d90a0] font-mono uppercase tracking-wider mb-2">
                  Key Interactive Capabilities
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#dae2fd]">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Meta & Metrics */}
            <div className="bg-[#222a3d]/60 border border-[#434655]/40 rounded-xl p-5 flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-label-caps text-xs text-[#8d90a0] font-mono uppercase tracking-wider mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#171f33] text-[#7bd0ff] font-mono text-xs border border-[#434655]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metrics && (
                  <div>
                    <h4 className="font-label-caps text-xs text-[#8d90a0] font-mono uppercase tracking-wider mb-2">
                      Key Impact Metrics
                    </h4>
                    <div className="space-y-2">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-lg bg-[#171f33]/80 border border-[#434655]/40 text-xs text-[#4edea3] font-mono"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#434655]/40 flex flex-col gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>Inspect Source Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Switcher Between Projects */}
          <div className="pt-4 border-t border-[#434655]/30">
            <span className="font-label-caps text-xs text-[#8d90a0] font-mono uppercase tracking-wider block mb-3">
              Explore Other Featured Works
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {allProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setImageError(false);
                    onSelectProject(p);
                  }}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer flex items-center justify-between ${
                    p.id === project.id
                      ? 'bg-[#222a3d] border-[#7bd0ff] text-[#7bd0ff]'
                      : 'bg-[#171f33]/60 border-[#434655]/40 text-[#c3c6d7] hover:border-[#7bd0ff]/40'
                  }`}
                >
                  <span className="text-xs font-medium truncate">{p.title.split('—')[0]}</span>
                  <span className="material-symbols-outlined text-sm">
                    {p.id === project.id ? 'check' : 'arrow_forward'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
