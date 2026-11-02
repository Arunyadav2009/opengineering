import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { CompletedProjects } from './components/CompletedProjects';
import { ClientsPSU } from './components/ClientsPSU';
import { Management } from './components/Management';
import { OnSiteGallery } from './components/OnSiteGallery';
import { FireCalculator } from './components/Calculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, X } from 'lucide-react';

export type ActiveSectionType = 'services' | 'projects' | 'clients' | null;

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>(null);
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (section: 'services' | 'projects' | 'clients') => {
    setActiveSection((prev) => (prev === section ? null : section));
    // Scroll smoothly to the revealed content container
    setTimeout(() => {
      const el = document.getElementById('active-content-view');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Header Navigation Bar with Services, Completed Projects, and Clients buttons beside OP Engineering */}
      <Navbar 
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section (The Safety Pioneers) */}
        <AboutUs />

        {/* Dynamic Display: Only shows after clicking button (Services, Completed Projects, or Clients) */}
        {activeSection && (
          <section 
            id="active-content-view" 
            className="scroll-mt-24 border-y-2 border-slate-300 bg-white shadow-inner animate-fade-in relative transition-all"
          >
            {/* Top Control Bar with Close Button */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 sm:px-8">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wide">
                    Active View:{' '}
                    <span className="text-red-600">
                      {activeSection === 'services' && 'Turnkey Services & Engineering Disciplines'}
                      {activeSection === 'projects' && 'Completed Turnkey Projects (Power Plants, PSUs & Refineries)'}
                      {activeSection === 'clients' && 'Esteemed Clients & PSU Partners'}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveSection(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 text-xs font-bold rounded border border-slate-300 hover:border-red-300 shadow-xs transition-colors cursor-pointer"
                    title="Close this section"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Selected Component Content */}
            {activeSection === 'services' && <Services />}
            {activeSection === 'projects' && <CompletedProjects />}
            {activeSection === 'clients' && <ClientsPSU />}
          </section>
        )}

        {/* 4. A Glance of Our On-Site Engineering (Authentic Site Photographs) */}
        <OnSiteGallery />

        {/* 5. Management Team Section */}
        <Management />

        {/* 5. Fire Safety Requirement Estimator & Quote Calculator */}
        <FireCalculator />

        {/* 6. Contact Section with Direct Hotlines & Operational Offices */}
        <ContactSection />
      </main>

      {/* 7. Footer with GSTIN Badge, Legal Notices & Back to Top */}
      <Footer />

      {/* Single, Simple, Clean Floating WhatsApp Button to Er. Kishan Kumar Yadav */}
      {showFloatingBar && (
        <a
          href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20would%20like%20to%20inquire%20about%20fire%20fighting%20solutions%20with%20O%20P%20Engineering."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-lg transition-transform hover:scale-105"
          title="Direct WhatsApp to Er. Kishan Kumar Yadav (+91 8507302636)"
          aria-label="Direct WhatsApp to Er. Kishan Kumar Yadav"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Er. Kishan</span>
        </a>
      )}
    </div>
  );
}
