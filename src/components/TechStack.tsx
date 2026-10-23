import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills-overview" className="w-full bg-[#060e20]/60 border-y border-[#434655]/30 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#7bd0ff] font-label-badge text-[11px] font-mono uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Tooling &amp; Stack</span>
            </div>
            <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd]">
              Technologies I Work With
            </h2>
          </div>
          <p className="font-body-md text-[15px] text-[#c3c6d7] max-w-md">
            Core tools and technologies I use daily to craft scalable, accessible, and robust digital products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.code}
              onMouseEnter={() => setActiveCategory(category.code)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-6 rounded-xl bg-[#171f33]/70 border transition-all duration-300 flex flex-col gap-4 group ${
                activeCategory === category.code
                  ? 'border-[#7bd0ff]/60 shadow-[0_4px_24px_-6px_rgba(123,208,255,0.15)] bg-[#171f33]'
                  : 'border-[#434655]/40 hover:border-[#7bd0ff]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg bg-[#222a3d] ${category.color}`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {category.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg text-[#dae2fd] font-semibold">
                    {category.title}
                  </h3>
                </div>
                <span className="font-label-badge text-[11px] text-[#8d90a0] font-mono">
                  {category.code}
                </span>
              </div>

              <p className="font-body-sm text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded bg-[#222a3d]/80 border border-[#434655]/50 ${category.color} font-label-badge text-[11px] font-mono transition-transform group-hover:scale-[1.02]`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
