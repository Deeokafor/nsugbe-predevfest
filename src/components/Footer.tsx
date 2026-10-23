import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNotification?: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNotification }) => {
  const [logoFailed, setLogoFailed] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Alex Chen | Software Engineering Portfolio',
          text: 'Check out the portfolio of Alex Chen, CS Junior and Full-Stack Developer.',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        if (onNotification) {
          onNotification('Portfolio link copied to clipboard!');
        }
      }
    } catch {
      // Ignored
    }
  };

  return (
    <footer className="w-full bg-[#060e20] border-t border-[#434655]/40 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#434655]/30">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {!logoFailed ? (
                <img
                  alt="Monogram Logo"
                  className="h-6 w-auto object-contain"
                  src={PERSONAL_INFO.logoUrl}
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <div className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center font-bold text-[10px]">
                  AC
                </div>
              )}
              <span className="font-title-md text-base text-[#dae2fd] font-semibold">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-label-badge text-[11px] text-[#7bd0ff] font-mono uppercase px-2 py-0.5 rounded bg-[#222a3d]">
                Portfolio
              </span>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-[#c3c6d7] max-w-md">
              Learning, building, and growing through technology. Computer Science &amp; Engineering undergraduate focused on scalable distributed systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <button
              onClick={() => onNavigate('projects')}
              className="text-[#c3c6d7] hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('journey')}
              className="text-[#c3c6d7] hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              Journey
            </button>
            <button
              onClick={() => onNavigate('skills-overview')}
              className="text-[#c3c6d7] hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              Tech Stack
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#c3c6d7] hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Code Repository"
              className="p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <button
              onClick={handleShare}
              aria-label="Share Portfolio"
              title="Share portfolio"
              className="p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Inquiries"
              className="p-2 rounded-lg bg-[#222a3d] text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#2d3449] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body-sm text-xs text-[#8d90a0]">
            &copy; 2025 Alex Chen. Architected with high-craft engineering principles.
          </p>

          <div className="flex items-center gap-2 font-label-badge text-[11px] text-[#8d90a0] font-mono">
            <span>TERMINAL v2.4.0</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
            <span>LATENCY: 18ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
