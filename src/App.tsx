import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills-overview', 'projects', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === 'skills-overview') {
              setActiveSection('skills');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#0b1326] font-body-md text-[#dae2fd] antialiased min-h-screen flex flex-col selection:bg-[#2563eb] selection:text-[#eeefff]">
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenTalk={() => handleNavigate('contact')}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow bg-[#0b1326]">
        <div className="flex flex-col w-full text-[#dae2fd]">
          {/* Hero Section */}
          <Hero
            onExploreProjects={() => handleNavigate('projects')}
            onDownloadCV={() => setIsResumeOpen(true)}
          />

          {/* Technologies I Work With */}
          <TechStack />

          {/* About Me Section */}
          <About />

          {/* Featured Projects */}
          <Projects onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

          {/* Skills & Capabilities */}
          <Skills />

          {/* Learning Journey Timeline */}
          <Journey />

          {/* Contact Section */}
          <Contact onSuccessNotification={showToast} />
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onNotification={showToast} />

      {/* Case Study Modal with High-Fidelity Screens */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
          allProjects={PROJECTS}
        />
      )}

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171f33] border border-[#7bd0ff]/40 text-[#dae2fd] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 animate-bounce font-mono text-xs">
          <span className="material-symbols-outlined text-[#4edea3] text-lg">check_circle</span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
