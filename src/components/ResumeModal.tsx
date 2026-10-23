import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeContent = `ALEX CHEN
Full-Stack Developer & UI/UX Designer
Email: ${PERSONAL_INFO.email} | LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.seeking} Internship Candidate

EDUCATION
Tech University | Computer Science & Engineering (Junior)
Expected Graduation: May 2026
Coursework: Data Structures & Algorithms, Distributed Systems, Database Management, Object-Oriented Software Design, Computer Systems Architecture

TECHNICAL EXPERTISE
- Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SQL
- Frontend: React.js, Next.js, Tailwind CSS, Responsive Design, State Management
- Backend: Node.js, Express, RESTful APIs, PostgreSQL, Distributed Fundamentals
- Tooling: Git & GitHub, Figma, VS Code, Postman, Vercel, Docker basics

PROJECTS
1. AuraStudy — Student Productivity App
- Synchronized study session timers, weekly academic kanban, and burnout prevention tracker.
- Built with React, Tailwind CSS, and local storage state persistence.

2. Flux Finance — Personal Budget Dashboard
- Interactive financial management dashboard with SVG savings trajectory charts and expense breakdowns.
- Built with React, Chart.js, responsive layouts, and REST backend.

3. UniSwap — Campus Marketplace
- Localized peer-to-peer campus marketplace for textbooks and student hardware.
- Engineered multi-hub geolocation filters, condition tagging, and responsive grids.
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alex_Chen_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060e20]/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#171f33] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[85vh]">
        {/* Header */}
        <div className="h-14 px-6 bg-[#222a3d] border-b border-[#434655]/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7bd0ff] text-xl">description</span>
            <span className="font-title-md text-sm text-[#dae2fd] font-semibold">
              Alex Chen — Resume / Curriculum Vitae
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Resume"
            className="p-1.5 rounded-lg text-[#c3c6d7] hover:text-[#ffb4ab] hover:bg-[#2d3449] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Preview */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono text-xs leading-relaxed text-[#c3c6d7] bg-[#0b1326]">
          <div className="border-b border-[#434655]/40 pb-4">
            <h1 className="text-lg font-bold text-[#dae2fd] font-sans">Alex Chen</h1>
            <p className="text-[#7bd0ff]">Full-Stack Developer &amp; UI/UX Designer</p>
            <p className="text-[#8d90a0] mt-1">
              San Francisco Bay Area • {PERSONAL_INFO.email} • {PERSONAL_INFO.linkedin}
            </p>
          </div>

          <div>
            <h2 className="text-[#b4c5ff] font-semibold uppercase tracking-wider mb-2 font-sans text-sm">
              Education
            </h2>
            <div className="flex justify-between text-[#dae2fd] font-medium">
              <span>Tech University — B.S. Computer Science</span>
              <span className="text-[#8d90a0]">Class of 2026</span>
            </div>
            <p className="text-[#8d90a0] mt-0.5">
              Coursework: Data Structures &amp; Algorithms, Distributed Systems, Object-Oriented Software Design.
            </p>
          </div>

          <div>
            <h2 className="text-[#b4c5ff] font-semibold uppercase tracking-wider mb-2 font-sans text-sm">
              Technical Arsenal
            </h2>
            <p className="text-[#dae2fd]">
              React, TypeScript, JavaScript (ES6+), Python, Node.js, Express, PostgreSQL, Tailwind CSS, Figma, Git
            </p>
          </div>

          <div>
            <h2 className="text-[#b4c5ff] font-semibold uppercase tracking-wider mb-2 font-sans text-sm">
              Featured Shipped Works
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-[#dae2fd] font-semibold">AuraStudy — Student Productivity App</span>
                <p className="text-[#8d90a0]">
                  Integrated study timers, weekly assignments kanban, and burnout prevention analytics.
                </p>
              </div>
              <div>
                <span className="text-[#dae2fd] font-semibold">Flux Finance — Personal Budget Dashboard</span>
                <p className="text-[#8d90a0]">
                  Interactive financial tracking dashboard with dynamic SVG savings trajectories and category charts.
                </p>
              </div>
              <div>
                <span className="text-[#dae2fd] font-semibold">UniSwap — Campus Marketplace</span>
                <p className="text-[#8d90a0]">
                  Localized peer-to-peer student commerce application with multi-hub geolocation filters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-[#222a3d] border-t border-[#434655]/40 flex items-center justify-between shrink-0">
          <span className="text-xs text-[#8d90a0] font-mono">Status: Ready for Summer '25</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs text-[#c3c6d7] hover:bg-[#171f33] transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all flex items-center gap-1.5 shadow-md"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download CV (.txt)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
