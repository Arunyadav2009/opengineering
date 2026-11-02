import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  ShieldCheck, 
  Quote, 
  Award, 
  CheckCircle,
  Clock,
  ExternalLink,
  MessageSquare,
  Maximize2,
  X,
  Briefcase,
  Flame,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/companyData';

export const Management: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<'office' | 'studio'>('office');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const kishan = TEAM_MEMBERS.find((m) => m.isOwnerAndCeo) || TEAM_MEMBERS[0];
  const founder = TEAM_MEMBERS.find((m) => !m.isOwnerAndCeo) || TEAM_MEMBERS[1];

  const currentPhotoUrl = selectedPhoto === 'office' 
    ? (kishan.image || '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.44.00_ca2cc7ba.jpeg')
    : (kishan.secondaryImage || '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.34_f04a6c37.jpeg');

  return (
    <section id="management" className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean Left Alignment */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Governance & Engineering Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Executive Leadership & Ownership
          </h2>
          <div className="h-1.5 w-20 bg-red-600 mt-2 mb-3 rounded-full" />
          <p className="text-base text-slate-600 font-body leading-relaxed">
            Direct owner-driven engineering execution. At O P Engineering, all high-hazard fire protection projects, PSU contracts, and statutory compliance certifications are guided directly by our executive leadership.
          </p>
        </div>

        {/* Operational Philosophy Banner with Official Logo */}
        <div className="bg-white border border-red-200 rounded-2xl p-6 sm:p-8 mb-12 relative overflow-hidden shadow-xs">
          <div className="absolute top-4 right-4 text-red-500/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-950 border-2 border-amber-500/60 shadow-md shrink-0 p-1 flex items-center justify-center">
              <img 
                src="/assets/aistudio/op_engineering_logo_circle.png" 
                alt="O P Engineering Emblem" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-red-600 uppercase tracking-widest font-bold block mb-1">
                Our Core Operational Philosophy
              </span>
              <blockquote className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug font-heading">
                "{COMPANY_INFO.philosophy}"
              </blockquote>
              <p className="mt-2 text-xs text-slate-500 font-mono">
                — Established 1990 · Three Decades of Uncompromised Life Safety Execution
              </p>
            </div>
          </div>
        </div>

        {/* Featured Owner & CEO Spotlight Card */}
        <div className="bg-white border-2 border-slate-200 hover:border-red-300 rounded-2xl overflow-hidden shadow-md mb-12 transition-all">
          <div className="bg-slate-900 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-200">
                Executive Leadership Profile
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-red-600 text-white px-3 py-0.5 rounded font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Owner & CEO
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Photo Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-sm rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-100 shadow-lg">
                  {/* Real Photo of Kishan Kumar Yadav */}
                  <img 
                    src={currentPhotoUrl} 
                    alt="Er. Kishan Kumar Yadav - Owner & CEO, O P Engineering" 
                    className="w-full h-[360px] sm:h-[400px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Enlarge preview trigger button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-950 text-white p-2 rounded-lg backdrop-blur-xs transition-colors shadow-md cursor-pointer"
                    title="View Full High-Resolution Photo"
                    aria-label="Enlarge Photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 text-white">
                    <p className="font-bold text-base leading-tight">Er. Kishan Kumar Yadav</p>
                    <p className="text-xs text-amber-400 font-mono">Owner & CEO · O P Engineering</p>
                  </div>
                </div>

                {/* Photo Perspective Selector Buttons */}
                <div className="flex items-center gap-2 mt-4 w-full max-w-sm">
                  <button
                    onClick={() => setSelectedPhoto('office')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                      selectedPhoto === 'office'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Executive Desk
                  </button>
                  <button
                    onClick={() => setSelectedPhoto('studio')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                      selectedPhoto === 'studio'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Official Portrait
                  </button>
                </div>
              </div>

              {/* Bio & Leadership Details Column (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-red-600 font-bold uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Executive Head of Company</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                    Er. Kishan Kumar Yadav
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-sm sm:text-base font-bold text-red-600 font-mono">
                      Owner & CEO
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      Quality Engineering & Executive Leadership
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {kishan.bio}
                </p>

                {/* Key Executive Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-mono">Turnkey PSU Oversight</h4>
                      <p className="text-[11px] text-slate-600">Supervising high-stakes contracts for NTPC, BHEL, IOCL, and UPRVUNL.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-mono">QA/QC & Hydro-Testing</h4>
                      <p className="text-[11px] text-slate-600">Enforcing strict IS 3844, IS 15105 & NFPA 15 kg/cm² pressure integrity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-mono">Gas Suppression Systems</h4>
                      <p className="text-[11px] text-slate-600">Clean agent NOVEC 1230, CO₂ flooding & electrical room protection.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-mono">Statutory Fire NOC Clearance</h4>
                      <p className="text-[11px] text-slate-600">Liaison and compliance sign-offs for municipal and state fire brigades.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Buttons with Kishan Kumar Yadav */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:+918507302636"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Er. Kishan: +91 8507302636</span>
                  </a>

                  <a
                    href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20would%20like%20to%20discuss%20a%20fire%20fighting%20project%20with%20O%20P%20Engineering."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </a>

                  <span className="text-xs font-mono text-slate-500 ml-auto">
                    Siwan HO & Anpara BO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder & Owner Pillar Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold text-xl font-heading shrink-0 shadow-xs">
                GY
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 font-bold uppercase mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder of O P Engineering (Estd. 1990)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {founder.name}
                </h3>
                <p className="text-xs font-mono text-red-600 font-bold">
                  {founder.role} · 34+ Years Hydraulic & Turnkey Engineering Experience
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919472243274"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Founder: +91 9472243274</span>
              </a>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-2 rounded border border-slate-200">
                Pioneering Safety Since 1990
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {founder.bio}
              </p>
            </div>
            <div className="md:col-span-4 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono text-slate-700 space-y-1.5">
              <div className="font-bold text-slate-900 uppercase tracking-wide">Key Focus Areas:</div>
              <p>• Heavy Industrial Pump Houses</p>
              <p>• High-Capacity Deluge Networks</p>
              <p>• Public & Judiciary Landmarks</p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / High-Resolution Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">Er. Kishan Kumar Yadav</h4>
                <p className="text-xs text-amber-400 font-mono">Owner & CEO · O P Engineering</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-100 flex items-center justify-center">
              <img 
                src={currentPhotoUrl} 
                alt="Er. Kishan Kumar Yadav" 
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-md"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate-600">
                {selectedPhoto === 'office' ? 'Executive Office with O P Engineering Emblem' : 'Formal Studio Portrait'}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedPhoto(selectedPhoto === 'office' ? 'studio' : 'office')}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded border border-slate-300 font-bold transition-colors cursor-pointer"
                >
                  Switch to {selectedPhoto === 'office' ? 'Studio Portrait' : 'Office Desk'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
