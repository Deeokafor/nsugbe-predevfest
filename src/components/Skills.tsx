import React from 'react';
import { SKILL_PILLARS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[#4edea3] font-label-badge text-[11px] font-mono uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd]">
            My Skills &amp; Capabilities
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c6d7]">
            Practical technical capabilities and collaborative strengths developed through coursework, community projects, and hands-on coding.
          </p>
        </div>

        {/* 3 Categorized Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-[#171f33] border border-[#434655]/40 flex flex-col gap-4 hover:border-[#7bd0ff]/40 transition-colors"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[#434655]/30">
                <span className={`material-symbols-outlined ${pillar.color} text-[24px]`}>
                  {pillar.icon}
                </span>
                <h3 className="font-headline-sm text-lg text-[#dae2fd] font-semibold">
                  {pillar.title}
                </h3>
              </div>

              <ul className="space-y-3 font-body-sm text-xs sm:text-sm text-[#c3c6d7]">
                {pillar.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0">
                      check_circle
                    </span>
                    <span className={skill.highlight ? 'text-[#dae2fd] font-medium' : 'text-[#c3c6d7]'}>
                      {skill.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
