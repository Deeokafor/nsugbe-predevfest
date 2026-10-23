import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="w-full bg-[#060e20]/70 border-t border-[#434655]/30 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 text-[#7bd0ff] font-label-badge text-[11px] font-mono uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">timeline</span>
            <span>Growth Roadmap</span>
          </div>
          <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd]">
            My Journey So Far
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c6d7] max-w-md">
            How curiosity evolved into structured computer science, real production applications, and a mission to build impactful software.
          </p>
        </div>

        {/* Vertical Timeline Component */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#434655]/40 space-y-12 ml-4 sm:ml-8">
          {JOURNEY_MILESTONES.map((milestone) => (
            <div key={milestone.year} className="relative group">
              {/* Dot Indicator */}
              {milestone.isCurrent ? (
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#4edea3] ring-4 ring-[#4edea3]/20"></span>
              ) : (
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#171f33] border-2 border-[#7bd0ff] group-hover:bg-[#7bd0ff] group-hover:scale-125 transition-all"></span>
              )}

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-label-badge text-xs font-mono font-bold ${
                      milestone.isCurrent ? 'text-[#4edea3]' : 'text-[#7bd0ff]'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <span className="text-[#8d90a0] text-xs">•</span>
                  <span
                    className={`font-label-caps text-xs uppercase tracking-wider ${
                      milestone.isCurrent ? 'text-[#4edea3]' : 'text-[#8d90a0]'
                    }`}
                  >
                    {milestone.tag}
                  </span>
                </div>

                <h3 className="font-headline-sm text-lg text-[#dae2fd] font-semibold mt-0.5">
                  {milestone.title}
                </h3>

                <p className="font-body-sm text-sm text-[#c3c6d7] leading-relaxed mt-1">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
