import React from 'react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Narrative Biography */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#b4c5ff] font-label-badge text-[11px] font-mono uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">fingerprint</span>
            <span>Background</span>
          </div>

          <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd]">
            A Little About Me
          </h2>

          <div className="space-y-4 font-body-md text-[15px] text-[#c3c6d7] leading-relaxed">
            <p>
              My curiosity for computers started with tweaking open-source game scripts in high school. That spark quickly evolved into a dedicated pursuit of Computer Science at university, where I discovered the profound thrill of engineering systems from ground zero.
            </p>
            <p>
              I love sitting right at the intersection of robust backend engineering and thoughtful product design. To me, code is not simply syntax to execute—it's an architecture that directly shapes how humans interact with everyday information.
            </p>
            <p>
              When I'm not studying or debugging asynchronous promises, you will find me participating in campus hackathons, collaborating on community design libraries, or refining personal productivity workflows.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[20px]">
                location_on
              </span>
              <span className="font-body-sm text-sm text-[#dae2fd]">
                {PERSONAL_INFO.location}
              </span>
            </div>
            <span className="text-[#434655]">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3] text-[20px]">
                school
              </span>
              <span className="font-body-sm text-sm text-[#dae2fd]">
                {PERSONAL_INFO.graduationYear}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Key Highlight Focus Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-4">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div
              key={item.kicker}
              className="p-6 rounded-xl bg-[#171f33]/60 border border-[#434655]/40 hover:bg-[#222a3d]/60 transition-all flex items-start gap-4 group"
            >
              <div className={`p-3 rounded-lg shrink-0 border ${item.colorClass}`}>
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-badge text-[11px] font-mono uppercase tracking-wider text-[#b4c5ff]">
                  {item.kicker}
                </span>
                <h3 className="font-headline-sm text-lg text-[#dae2fd] font-semibold">
                  {item.title}
                </h3>
                <p className="font-body-sm text-sm text-[#c3c6d7] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
