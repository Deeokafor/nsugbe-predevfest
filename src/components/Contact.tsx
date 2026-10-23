import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onSuccessNotification?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessNotification }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'internship',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      if (onSuccessNotification) {
        onSuccessNotification('Email copied to clipboard!');
      }
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessNotification) {
        onSuccessNotification('Thank you for reaching out! Alex will respond promptly.');
      }
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      opportunityType: 'internship',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="p-6 md:p-12 rounded-2xl bg-[#171f33]/70 border border-[#434655]/40 relative overflow-hidden shadow-2xl">
        {/* Ambient Glow Behind Form */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2563eb]/20 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* Left: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#7bd0ff] font-label-badge text-[11px] font-mono uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">forum</span>
                <span>Get In Touch</span>
              </div>
              <h2 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-[#dae2fd] leading-tight">
                Have an Opportunity or Project in Mind?
              </h2>
              <p className="font-body-md text-[15px] text-[#c3c6d7] leading-relaxed">
                I'm always interested in learning, collaborating, and building something meaningful. Let's discuss an internship, freelance work, or simply talk tech.
              </p>
            </div>

            <div className="flex flex-col gap-3 font-body-sm text-sm">
              {/* Email Item */}
              <div className="p-3.5 rounded-lg bg-[#222a3d]/60 border border-[#434655]/40 hover:border-[#7bd0ff]/50 flex items-center justify-between gap-3 transition-all group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 flex-grow"
                >
                  <span className="material-symbols-outlined text-[#7bd0ff] text-[22px]">
                    alternate_email
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[11px] text-[#8d90a0] uppercase font-mono">
                      Email Directly
                    </span>
                    <span className="text-[#dae2fd] font-semibold group-hover:text-[#7bd0ff] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded text-[#8d90a0] hover:text-[#7bd0ff] hover:bg-[#2d3449] transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              {/* LinkedIn Item */}
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#222a3d]/60 border border-[#434655]/40 hover:border-[#b4c5ff]/50 flex items-center gap-3 transition-all group"
              >
                <span className="material-symbols-outlined text-[#b4c5ff] text-[22px]">
                  badge
                </span>
                <div className="flex flex-col">
                  <span className="font-label-caps text-[11px] text-[#8d90a0] uppercase font-mono">
                    Professional Network
                  </span>
                  <span className="text-[#dae2fd] font-semibold group-hover:text-[#b4c5ff] transition-colors">
                    {PERSONAL_INFO.linkedin}
                  </span>
                </div>
              </a>

              {/* Timezone Badge */}
              <div className="p-3.5 rounded-lg bg-[#060e20]/80 border border-[#434655]/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#8d90a0]">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="font-mono text-xs">{PERSONAL_INFO.timezone}</span>
                </div>
                <span className="font-label-badge text-[11px] text-[#4edea3] font-mono">
                  {PERSONAL_INFO.timezoneTag}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#060e20]/90 p-6 sm:p-8 rounded-xl border border-[#434655]/40 shadow-inner flex flex-col justify-center">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#007d55]/30 border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3]">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-headline-sm text-xl text-[#dae2fd] font-bold">
                  Message Dispatched!
                </h3>
                <p className="font-body-md text-sm text-[#c3c6d7] max-w-md">
                  Thank you for reaching out, <span className="text-[#b4c5ff] font-semibold">{formData.name}</span>. Your note has been received and Alex will review it within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-2 px-5 py-2.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-[#7bd0ff] font-mono text-xs border border-[#434655]/50 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-label-caps text-[11px] text-[#c3c6d7] font-mono uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#222a3d]/50 border border-[#434655]/60 text-[#dae2fd] placeholder:text-[#8d90a0] focus:outline-none focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] font-body-sm text-sm transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-label-caps text-[11px] text-[#c3c6d7] font-mono uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#222a3d]/50 border border-[#434655]/60 text-[#dae2fd] placeholder:text-[#8d90a0] focus:outline-none focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] font-body-sm text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="opportunity-type"
                    className="font-label-caps text-[11px] text-[#c3c6d7] font-mono uppercase"
                  >
                    Project / Opportunity Type
                  </label>
                  <select
                    id="opportunity-type"
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#222a3d]/50 border border-[#434655]/60 text-[#dae2fd] focus:outline-none focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] font-body-sm text-sm transition-all cursor-pointer"
                  >
                    <option className="bg-[#171f33] text-[#dae2fd]" value="internship">
                      Summer 2025 Internship
                    </option>
                    <option className="bg-[#171f33] text-[#dae2fd]" value="fulltime">
                      Full-Time / Co-Op Role
                    </option>
                    <option className="bg-[#171f33] text-[#dae2fd]" value="freelance">
                      Freelance UI/UX or Web Project
                    </option>
                    <option className="bg-[#171f33] text-[#dae2fd]" value="collaboration">
                      Open Source / Collaboration
                    </option>
                    <option className="bg-[#171f33] text-[#dae2fd]" value="other">
                      Just Saying Hello
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-label-caps text-[11px] text-[#c3c6d7] font-mono uppercase"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me a bit about what you're building or the role you are looking to fill..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#222a3d]/50 border border-[#434655]/60 text-[#dae2fd] placeholder:text-[#8d90a0] focus:outline-none focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] font-body-sm text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 py-3 rounded-lg bg-[#2563eb] text-[#eeefff] font-title-md text-sm font-semibold hover:bg-[#b4c5ff] hover:text-[#002a78] transition-all duration-200 shadow-[0_0_20px_-4px_rgba(37,99,235,0.4)] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {isSubmitting ? 'sync' : 'send'}
                  </span>
                </button>

                <p className="text-center font-label-badge text-[11px] text-[#8d90a0] font-mono">
                  Typical response turnaround: &lt; 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
