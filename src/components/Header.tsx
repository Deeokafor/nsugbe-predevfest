import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenTalk: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenTalk,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1326]/85 backdrop-blur-xl border-b border-[#434655]/40 shadow-[0_4px_20px_-4px_rgba(6,14,32,0.6)]">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            {!logoFailed ? (
              <img
                alt="Monogram Logo"
                className="h-8 w-auto object-contain"
                src={PERSONAL_INFO.logoUrl}
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7bd0ff] flex items-center justify-center font-bold text-white text-xs">
                AC
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-headline-sm text-[20px] text-[#dae2fd] group-hover:text-[#b4c5ff] transition-colors tracking-tight font-semibold">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-label-badge text-[11px] text-[#7bd0ff] font-mono tracking-wider uppercase">
                .dev / student
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#222a3d]/80 border border-[#007d55]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-label-badge text-[11px] text-[#c3c6d7] font-mono">
              {PERSONAL_INFO.statusBadge}
            </span>
          </div>
        </div>

        {/* Center Nav Zone */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#060e20]/60 p-1.5 rounded-xl border border-[#434655]/30">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-1.5 transition-all text-sm rounded-lg cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#222a3d] text-[#b4c5ff] font-medium shadow-sm'
                    : 'text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#222a3d]/50 font-normal'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTalk}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2563eb] text-[#eeefff] font-title-md text-sm font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all shadow-[0_0_20px_-4px_rgba(37,99,235,0.45)] active:scale-95 cursor-pointer"
          >
            Let's Talk
          </button>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}
            aria-label="View About Alex"
            className="w-8 h-8 rounded-full bg-[#b4c5ff] flex items-center justify-center ring-2 ring-[#b4c5ff]/20 hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[#002a78] text-[18px]">person</span>
          </a>

          <button
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#c3c6d7] hover:text-[#dae2fd] hover:bg-[#222a3d] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0b1326]/98 border-b border-[#434655]/40 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-[#222a3d] text-[#b4c5ff] font-medium'
                  : 'text-[#c3c6d7] hover:bg-[#171f33]'
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff]"></span>
              )}
            </button>
          ))}
          <div className="pt-2 border-t border-[#434655]/30 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTalk();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <span className="material-symbols-outlined text-sm">chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
