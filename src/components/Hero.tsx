import React, { useState } from 'react';
import { PERSONAL_INFO, CODE_SNIPPET } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onDownloadCV,
}) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="home" className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col justify-center">
      {/* Ambient Backdrop Aura Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2563eb]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#00a6e0]/10 blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#222a3d]/90 border border-[#007d55]/30 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4edea3]"></span>
            </span>
            <span className="font-label-badge text-[11px] text-[#bdffdb] font-mono tracking-wide uppercase">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-[42px] sm:text-[54px] lg:text-[56px] font-extrabold tracking-tight text-[#dae2fd] leading-[1.1]">
            Hi, I'm Alex Chen.<br />
            I Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7bd0ff] via-[#b4c5ff] to-[#2563eb]">
              Digital Experiences.
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-body-lg text-[18px] text-[#c3c6d7] max-w-xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563eb] text-[#eeefff] font-title-md text-base font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all duration-200 shadow-[0_0_24px_-4px_rgba(37,99,235,0.5)] active:scale-95 group cursor-pointer"
            >
              <span>Explore My Projects</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <button
              onClick={onDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#222a3d]/80 text-[#dae2fd] hover:bg-[#2d3449] hover:text-[#b4c5ff] transition-all duration-200 border border-[#434655]/40 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span className="font-title-md text-base font-medium">Download My CV</span>
            </button>
          </div>

          {/* Social Connectivity Bar */}
          <div className="flex items-center gap-4 pt-1 text-[#c3c6d7]">
            <span className="font-label-caps text-[11px] text-[#8d90a0] uppercase tracking-widest font-mono">
              Connect
            </span>
            <div className="h-px w-8 bg-[#434655]/60"></div>
            <div className="flex items-center gap-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-lg hover:bg-[#222a3d] hover:text-[#7bd0ff] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-lg hover:bg-[#222a3d] hover:text-[#7bd0ff] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                title="Email Alex"
                className="p-2 rounded-lg hover:bg-[#222a3d] hover:text-[#7bd0ff] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="w-full grid grid-cols-3 gap-2 pt-2 border-t border-[#434655]/30">
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-[#b4c5ff] font-semibold">
                {PERSONAL_INFO.educationLevel}
              </span>
              <span className="font-body-sm text-xs text-[#8d90a0]">
                {PERSONAL_INFO.university}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-[#7bd0ff] font-semibold">
                {PERSONAL_INFO.shippedCount}
              </span>
              <span className="font-body-sm text-xs text-[#8d90a0]">
                {PERSONAL_INFO.shippedDesc}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg text-[#4edea3] font-semibold">
                {PERSONAL_INFO.seeking}
              </span>
              <span className="font-body-sm text-xs text-[#8d90a0]">
                {PERSONAL_INFO.seekingRole}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          <div className="relative w-full max-w-md">
            {/* Portrait Container */}
            <div className="relative rounded-2xl overflow-hidden bg-[#171f33] p-2 shadow-2xl border border-[#7bd0ff]/20 group">
              <div className="aspect-square rounded-xl overflow-hidden relative bg-[#060e20]">
                <img
                  alt="Alex Chen - Software Engineering Student"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={imgError ? PERSONAL_INFO.hotlinkAvatar : PERSONAL_INFO.avatarImage}
                  onError={() => {
                    if (!imgError) {
                      setImgError(true);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e20]/80 via-transparent to-transparent"></div>
              </div>

              {/* Monogram Floating Watermark / Pin */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#060e20]/90 backdrop-blur-md border border-[#434655]/40 flex items-center gap-1.5 font-label-badge text-[11px] text-[#7bd0ff] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff]"></span>
                PORTFOLIO_SRC
              </div>
            </div>

            {/* Overlapping Floating Code Editor Window */}
            <div className="absolute -bottom-10 -left-4 sm:-left-8 w-[95%] sm:w-[105%] rounded-xl overflow-hidden bg-[#060e20]/95 backdrop-blur-xl border border-[#434655]/60 shadow-[0_20px_40px_-15px_rgba(6,14,32,0.9)] z-20">
              {/* Code Window Header */}
              <div className="h-9 px-3.5 bg-[#222a3d]/90 border-b border-[#434655]/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]"></span>
                </div>
                <div className="flex items-center gap-1.5 font-code-inline text-xs text-[#c3c6d7] font-mono">
                  <span className="material-symbols-outlined text-[14px] text-[#b4c5ff]">
                    data_object
                  </span>
                  <span>developer.ts</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  title="Copy code"
                  className="px-1.5 py-0.5 rounded text-[11px] text-[#8d90a0] hover:text-[#dae2fd] hover:bg-[#2d3449] font-mono transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[13px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied' : 'TS'}</span>
                </button>
              </div>

              {/* Code Listing */}
              <div className="p-4 font-code-block text-[13px] leading-relaxed font-mono">
                <p>
                  <span className="text-[#7bd0ff] font-semibold">const</span>{' '}
                  <span className="text-[#dbe1ff]">student</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-[#c3c6d7]">name:</span>{' '}
                  <span className="text-[#6ffbbe]">'Alex Chen'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#c3c6d7]">role:</span>{' '}
                  <span className="text-[#6ffbbe]">'Builder &amp; Designer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#c3c6d7]">passions:</span> [
                  <span className="text-[#7bd0ff]">'Web Dev'</span>,{' '}
                  <span className="text-[#7bd0ff]">'Clean UI'</span>,{' '}
                  <span className="text-[#7bd0ff]">'Distributed Systems'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-[#c3c6d7]">status:</span>{' '}
                  <span className="text-[#6ffbbe]">
                    'Ready to build impactful software'
                  </span>
                </p>
                <p>{'};'}</p>
              </div>
            </div>

            {/* Micro Floating Glow Badges */}
            <div className="absolute -top-4 -left-4 px-3 py-1 rounded-full bg-[#222a3d]/90 backdrop-blur-md border border-[#434655]/50 text-[#7bd0ff] font-label-badge text-[11px] font-mono flex items-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[14px]">bolt</span> React 19
            </div>
            <div className="absolute top-1/2 -right-6 px-3 py-1 rounded-full bg-[#222a3d]/90 backdrop-blur-md border border-[#434655]/50 text-[#b4c5ff] font-label-badge text-[11px] font-mono flex items-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[14px]">terminal</span> Python
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
