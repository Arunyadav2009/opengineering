import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  Phone, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Flame, 
  Building2, 
  FolderKanban,
  Camera,
  Users,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ActiveSectionType } from '../App';

interface NavbarProps {
  activeSection: ActiveSectionType;
  onSelectSection: (section: 'services' | 'projects' | 'clients') => void;
  onOpenRfp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onSelectSection, 
  onOpenRfp 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gstCopied, setGstCopied] = useState(false);

  const copyGSTIN = () => {
    navigator.clipboard.writeText(COMPANY_INFO.gstin);
    setGstCopied(true);
    setTimeout(() => setGstCopied(false), 2000);
  };

  const handleButtonClick = (section: 'services' | 'projects' | 'clients') => {
    onSelectSection(section);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Corporate Utility Ticker Bar in Light Theme */}
      <div className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap font-mono text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-900 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Specialist for Fire Fighting Solutions</span>
              <span className="text-red-600 font-bold hidden sm:inline">(Estd. 1990)</span>
            </span>

            <div className="hidden md:flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded border border-slate-300 text-slate-700 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified GSTIN: <strong className="text-slate-900">{COMPANY_INFO.gstin}</strong></span>
              <button 
                onClick={copyGSTIN}
                title="Copy GSTIN" 
                className="hover:text-red-600 ml-1 transition-colors cursor-pointer"
              >
                {gstCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono ml-auto">
            <div className="hidden lg:flex items-center gap-3 text-slate-600">
              <span className="text-slate-500">Inquiries:</span>
              <a href="tel:+918507302636" className="hover:text-red-600 transition-colors font-semibold text-slate-900">
                +91 8507302636
              </a>
              <span className="text-slate-300">|</span>
              <a 
                href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20am%20inquiring%20about%20fire%20fighting%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 text-emerald-600 font-bold flex items-center gap-1"
                title="WhatsApp Er. Kishan Kumar Yadav (+91 8507302636)"
              >
                <MessageSquare className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp Er. Kishan</span>
              </a>
            </div>

            <a 
              href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20am%20inquiring%20about%20fire%20fighting%20solutions." 
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center gap-1 text-emerald-600 font-bold"
              title="WhatsApp Er. Kishan"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Sticky Navigation Bar (Light Theme) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Brand Left: Clean Corporate Logo Lockup */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <div className="flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-300 group-hover:border-red-600 shadow-xs transition-colors">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-slate-950 border border-amber-500/60 p-0.5 shrink-0 flex items-center justify-center">
                  <img 
                    src="/assets/aistudio/op_engineering_logo_circle.png" 
                    alt="O P Engineering Emblem" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-black tracking-tight font-heading uppercase text-slate-900 leading-tight">
                    O P ENGINEERING
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-red-600 font-bold tracking-wide uppercase">
                    (Estd. 1990) · Fire Fighting
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* ALL BUTTONS BESIDE OP ENGINEERING (LIGHT CLEAN THEME - STYLED SAME LIKE SERVICES) */}
          <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center max-w-4xl px-2">
            <button
              type="button"
              onClick={() => handleButtonClick('services')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'services'
                  ? 'bg-red-600 text-white ring-2 ring-red-300'
                  : 'bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50'
              }`}
              title="Click to view Turnkey Services"
            >
              <Flame className={`w-3.5 h-3.5 ${activeSection === 'services' ? 'text-white' : 'text-red-600'}`} />
              <span>Services</span>
              {activeSection === 'services' && <span className="text-[10px] bg-white/20 px-1 rounded">Active</span>}
            </button>

            <button
              type="button"
              onClick={() => handleButtonClick('projects')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'projects'
                  ? 'bg-red-600 text-white ring-2 ring-red-300'
                  : 'bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50'
              }`}
              title="Click to view Completed Projects"
            >
              <FolderKanban className={`w-3.5 h-3.5 ${activeSection === 'projects' ? 'text-white' : 'text-slate-600'}`} />
              <span>Completed Projects</span>
              {activeSection === 'projects' && <span className="text-[10px] bg-white/20 px-1 rounded">Active</span>}
            </button>

            <button
              type="button"
              onClick={() => handleButtonClick('clients')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
                activeSection === 'clients'
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                  : 'bg-white text-slate-800 border border-slate-300 hover:border-blue-500 hover:text-blue-600 hover:bg-slate-50'
              }`}
              title="Click to view Clients"
            >
              <Building2 className={`w-3.5 h-3.5 ${activeSection === 'clients' ? 'text-white' : 'text-blue-600'}`} />
              <span>Clients</span>
              {activeSection === 'clients' && <span className="text-[10px] bg-white/20 px-1 rounded">Active</span>}
            </button>

            <a
              href="#about"
              className="px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50 group"
              title="Click to view About Us"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-600 group-hover:text-red-600" />
              <span>About Us</span>
            </a>

            <a
              href="#on-site-glance"
              className="px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50 group"
              title="Click to view On-Site Glance"
            >
              <Camera className="w-3.5 h-3.5 text-red-600" />
              <span>On-Site Glance</span>
            </a>

            <a
              href="#management"
              className="px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50 group"
              title="Click to view Management Team"
            >
              <Users className="w-3.5 h-3.5 text-slate-600 group-hover:text-red-600" />
              <span>Management</span>
            </a>

            <a
              href="#contact"
              className="px-2.5 xl:px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 whitespace-nowrap bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600 hover:bg-slate-50 group"
              title="Click to view Contact Information"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Right Utility: Clean Primary CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Simple Primary CTA Button */}
            <a
              href="#contact"
              onClick={onOpenRfp}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-md shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Drawer Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Compact Sub-bar for All Buttons */}
        <div className="lg:hidden flex items-center bg-slate-50 border-t border-slate-200 px-2 py-2 gap-1.5 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => handleButtonClick('services')}
            className={`shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 transition-all ${
              activeSection === 'services'
                ? 'bg-red-600 text-white'
                : 'bg-white text-slate-800 border border-slate-300'
            }`}
          >
            <Flame className={`w-3 h-3 ${activeSection === 'services' ? 'text-white' : 'text-red-600'}`} />
            <span>Services</span>
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick('projects')}
            className={`shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 transition-all ${
              activeSection === 'projects'
                ? 'bg-red-600 text-white'
                : 'bg-white text-slate-800 border border-slate-300'
            }`}
          >
            <FolderKanban className={`w-3 h-3 ${activeSection === 'projects' ? 'text-white' : 'text-slate-600'}`} />
            <span>Completed Projects</span>
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick('clients')}
            className={`shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 transition-all ${
              activeSection === 'clients'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-800 border border-slate-300'
            }`}
          >
            <Building2 className={`w-3 h-3 ${activeSection === 'clients' ? 'text-white' : 'text-blue-600'}`} />
            <span>Clients</span>
          </button>
          <a
            href="#about"
            className="shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600"
          >
            <ShieldCheck className="w-3 h-3 text-slate-600" />
            <span>About Us</span>
          </a>
          <a
            href="#on-site-glance"
            className="shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600"
          >
            <Camera className="w-3 h-3 text-red-600" />
            <span>On-Site Glance</span>
          </a>
          <a
            href="#management"
            className="shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600"
          >
            <Users className="w-3 h-3 text-slate-600" />
            <span>Management</span>
          </a>
          <a
            href="#contact"
            className="shrink-0 py-1.5 px-2.5 rounded text-xs font-bold text-center flex items-center gap-1.5 bg-white text-slate-800 border border-slate-300 hover:border-red-500 hover:text-red-600"
          >
            <PhoneCall className="w-3 h-3 text-red-600" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mb-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-1">Corporate Details</span>
                <span className="text-xs text-slate-800 block">GSTIN: <strong className="font-mono">{COMPANY_INFO.gstin}</strong></span>
                <span className="text-xs text-slate-600 block mt-0.5">Siwan (Head Office) · Anpara (Branch)</span>
              </div>

              {/* The 3 main buttons in mobile menu */}
              <div className="flex flex-col gap-1.5 mb-2 pb-2 border-b border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Click to open:</span>
                <button
                  onClick={() => handleButtonClick('services')}
                  className={`px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left ${
                    activeSection === 'services'
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-red-500" />
                    <span>Services</span>
                  </span>
                  <span className="text-[10px] font-mono">{activeSection === 'services' ? 'Opened' : 'Show'}</span>
                </button>

                <button
                  onClick={() => handleButtonClick('projects')}
                  className={`px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left ${
                    activeSection === 'projects'
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FolderKanban className="w-4 h-4 text-slate-600" />
                    <span>Completed Projects</span>
                  </span>
                  <span className="text-[10px] font-mono">{activeSection === 'projects' ? 'Opened' : 'Show'}</span>
                </button>

                <button
                  onClick={() => handleButtonClick('clients')}
                  className={`px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left ${
                    activeSection === 'clients'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>Clients</span>
                  </span>
                  <span className="text-[10px] font-mono">{activeSection === 'clients' ? 'Opened' : 'Show'}</span>
                </button>
              </div>

              {/* Page Section Buttons in Mobile Drawer */}
              <div className="flex flex-col gap-1.5 mb-2 pb-2 border-b border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Company & Works:</span>
                
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left bg-white text-slate-800 border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-600" />
                    <span>About Us</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href="#on-site-glance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left bg-white text-slate-800 border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-red-600" />
                    <span>On-Site Glance (Field Photos)</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href="#management"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left bg-white text-slate-800 border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-600" />
                    <span>Management</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between text-left bg-white text-slate-800 border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-red-600" />
                    <span>Contact Us</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 px-4 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg block shadow-xs transition-colors"
                >
                  Request Commercial Quote
                </a>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono pt-1">
                  <a href="tel:+919472243274" className="p-2 bg-slate-100 rounded text-slate-800 font-bold hover:bg-slate-200">
                    Call Gorakhnath
                  </a>
                  <a href="tel:+918507302636" className="p-2 bg-slate-100 rounded text-slate-800 font-bold hover:bg-slate-200">
                    Call Kishan
                  </a>
                </div>

                <a
                  href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20am%20inquiring%20about%20fire%20fighting%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Er. Kishan (+91 8507302636)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
