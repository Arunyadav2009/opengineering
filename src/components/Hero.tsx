import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  Building, 
  Wrench, 
  Award,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenRfp?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const keyHighlights = [
    {
      title: "Power Plants & PSUs",
      desc: "NTPC Barh, BHEL Nagarnar & UPRVUNL Anpara high-pressure deluge networks.",
      pump: "2850 LPM Centrifugal Arrays",
      standard: "IS 15301 / NFPA 20"
    },
    {
      title: "Refineries & Petrochemical",
      desc: "HMEL Bhatinda & IOCL Barauni foam suppression and yard hydrant ring mains.",
      pump: "5700 LPM High-Flow Deluge",
      standard: "OISD-116 / NBC 2016"
    },
    {
      title: "Judicial & Public Complexes",
      desc: "Lucknow High Court automatic quartzoid sprinklers & addressable VESDA alarms.",
      pump: "Wet & Dry Multi-Riser Grid",
      standard: "NBC-2016 Part 4 Clearance"
    }
  ];

  return (
    <section className="relative bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Subtle Light Industrial Grid & Soft Ambient Warmth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        
        {/* Top Kicker Bar: Clean & Uncluttered */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
            <span className="font-bold text-slate-900 uppercase">O P Engineering</span>
            <span className="text-slate-400">·</span>
            <span className="text-red-600 font-semibold">Estd. 1990</span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-600 hidden sm:inline">34+ Years of Turnkey Safety</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>NTPC, BHEL & UPRVUNL Approved</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Primary Actions (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase mb-2">
              L&T Style Enterprise Execution · NBC 2016 & NFPA Compliant
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight font-heading uppercase text-slate-900 leading-[1.1] mb-5">
              Engineering Safety.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-600">
                Protecting Nations.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-8 max-w-2xl">
              Turnkey fire fighting solutions, high-pressure pump houses, external yard hydrant loops, clean agent gas suppression (NOVEC/CO₂), and addressable VESDA detection networks protecting India’s largest power plants, refineries, and judicial complexes since 1990.
            </p>

            {/* Focused Actions (No services/projects/clients buttons here — kept strictly on top navbar) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#estimator"
                className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-lg border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>Consult Engineering Team</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg">
              <div>
                <span className="text-2xl font-black font-mono text-slate-900 block">34+</span>
                <span className="text-xs text-slate-500 font-medium">Years Experience</span>
              </div>
              <div>
                <span className="text-2xl font-black font-mono text-slate-900 block">15 kg</span>
                <span className="text-xs text-slate-500 font-medium">Hydro-Tested</span>
              </div>
              <div>
                <span className="text-2xl font-black font-mono text-slate-900 block">100%</span>
                <span className="text-xs text-slate-500 font-medium">Statutory Compliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Enterprise Highlight Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-950 border border-amber-500/60 p-0.5 shrink-0 flex items-center justify-center">
                    <img 
                      src="/assets/aistudio/op_engineering_logo_circle.png" 
                      alt="O P Engineering" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-red-600 font-bold uppercase block">
                      Turnkey Execution
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      O P Engineering Highlights
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  NBC-2016 Part 4
                </span>
              </div>

              {/* Simple Tab Pills */}
              <div className="flex gap-1.5 mb-4 p-1 bg-white rounded-lg border border-slate-200">
                {keyHighlights.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer text-center ${
                      activeTab === idx
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4">
                <div className="text-xs font-mono font-bold text-amber-600 uppercase mb-1">
                  {keyHighlights[activeTab].title}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {keyHighlights[activeTab].desc}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Specification</span>
                    <span className="text-slate-900 font-semibold">{keyHighlights[activeTab].pump}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Code Standard</span>
                    <span className="text-slate-900 font-semibold">{keyHighlights[activeTab].standard}</span>
                  </div>
                </div>
              </div>

              {/* Clean Official Verification Note in Flow */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-slate-700">
                <div className="flex items-center gap-1.5 text-amber-800 font-bold mb-1 font-mono text-[11px] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Official Enterprise Verification</span>
                </div>
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-600">
                  <span>GSTIN: <strong className="text-slate-900">{COMPANY_INFO.gstin}</strong></span>
                  <a href="#contact" className="text-red-600 hover:underline font-bold">Contact Offices →</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Clean Industrial Metric Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="text-xs font-mono text-red-600 font-bold uppercase mb-1">Pumping & Electricals</div>
            <div className="text-sm font-bold text-slate-900">Fire Pump Houses (2850 LPM)</div>
            <div className="text-xs text-slate-500 mt-1">Standby diesel, electric & jockey pumps with automated PLC panels.</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="text-xs font-mono text-amber-600 font-bold uppercase mb-1">Water Suppression</div>
            <div className="text-sm font-bold text-slate-900">Hydrants & Wet Risers</div>
            <div className="text-xs text-slate-500 mt-1">Class C ERW pipelines, automatic sprinklers, alarm check valves.</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="text-xs font-mono text-emerald-600 font-bold uppercase mb-1">Clean Agent Flooding</div>
            <div className="text-sm font-bold text-slate-900">NOVEC 1230 & CO₂ Systems</div>
            <div className="text-xs text-slate-500 mt-1">Zero water damage gas suppression for server rooms & switchgear.</div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
            <div className="text-xs font-mono text-blue-600 font-bold uppercase mb-1">Life Safety Alarms</div>
            <div className="text-sm font-bold text-slate-900">VESDA Laser Air Sampling</div>
            <div className="text-xs text-slate-500 mt-1">Addressable detection loops, optical beam sensors, and sounders.</div>
          </div>
        </div>

      </div>
    </section>
  );
};
