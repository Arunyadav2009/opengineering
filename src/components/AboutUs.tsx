import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Gauge, 
  FileCheck, 
  ArrowUpRight,
  Flame,
  Award,
  Wrench
} from 'lucide-react';
import { COMPANY_INFO, COVERAGE_SECTORS } from '../data/companyData';

export const AboutUs: React.FC = () => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('industrial-psu');
  const activeSector = COVERAGE_SECTORS.find((s) => s.id === selectedSectorId) || COVERAGE_SECTORS[0];

  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Corporate Header - Clean Left Alignment */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Established 1990 · Over Three Decades of Turnkey Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading uppercase text-slate-900 leading-tight">
            THE SAFETY PIONEERS
          </h2>
          <div className="h-1.5 w-24 bg-amber-400 mt-2 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed font-medium">
            As <strong className="text-slate-900 font-bold">O P Engineering</strong>, established in 1990, we deliver turnkey fire protection, hydrant networks, gas flooding (NOVEC/CO₂), and VESDA detection systems for heavy industries, power grids, healthcare, and commercial landmarks with single-source accountability.
          </p>
        </div>

        {/* Two-Column Corporate Block: Narrative & Pillars Left (7 cols), Technical Insignia Card Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left: Leadership Philosophy & Three Technical Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Under the foundational engineering leadership of <strong>Gorakhnath Yadav</strong> (Founder & Owner) and <strong>Er. Kishan Kumar Yadav</strong> (Owner & CEO), our systems are built without subcontracting compromises. From heavy civil pump house manifolds to addressable microprocessor panels, every square foot is commissioned to prevent catastrophe.
            </p>

            {/* Three Pillar Cards in Light Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-red-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-1">
                  Heavy Hydraulics
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  High-capacity diesel & electric pumps with dual battery starter redundancy.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Gauge className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-1">
                  15 kg/cm² Testing
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Exhaustive on-site hydrostatic hold tests for zero pipeline leakage assurance.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-emerald-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-1">
                  Statutory Fire NOC
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Complete technical dossiers, municipal compliance, and life-safety sign-offs.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Central PSU Approved Contractor</span>
              </div>
              <span className="text-red-600 font-bold">100% In-House Execution</span>
            </div>
          </div>

          {/* Right: Technical Blueprint & Corporate Insignia Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-500">
                <span className="text-amber-700 font-bold">SPEC: OP-1990-DELUGE</span>
                <span className="bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-bold">
                  NBC-2016 Part 4
                </span>
              </div>

              {/* Technical Schematic Drawing Graphic */}
              <div className="py-5 flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-amber-400/60 flex items-center justify-center p-2 mb-4">
                  <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-amber-500 flex items-center justify-center shadow-md p-1.5">
                    <img 
                      src="/assets/aistudio/op_engineering_logo_circle.png" 
                      alt="O P Engineering Insignia" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <span className="absolute -top-1 bg-red-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    34+ Yrs Trust
                  </span>
                </div>

                <h4 className="text-base font-bold font-heading uppercase text-slate-900 tracking-wide">
                  O P Engineering
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Turnkey Fire Safety Contractor & PSU Partner
                </p>

                {/* Technical Blueprint Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mt-5 w-full text-left font-mono text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block uppercase">Piping Pressure</span>
                    <span className="text-red-600 font-bold text-sm">Up to 15 kg/cm²</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block uppercase">Max Pump Flow</span>
                    <span className="text-emerald-700 font-bold text-sm">2850 LPM Centrifugal</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block uppercase">Verification</span>
                    <span className="text-slate-900 font-bold text-xs truncate">GSTIN: {COMPANY_INFO.gstin}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="text-slate-500 text-[10px] block uppercase">Standard</span>
                    <span className="text-blue-700 font-bold text-xs">IS 15301 / NFPA 20</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Head Office: Siwan (Bihar)</span>
                <span>Branch: Anpara (UP)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sector Coverage Switcher in Light Theme */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3 mb-6">
            <div>
              <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block">
                Infrastructure Coverage
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mt-0.5">
                Engineered for High-Hazard National Environments
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 self-start sm:self-auto shadow-xs">
              {COVERAGE_SECTORS.length} Enterprise Sectors
            </span>
          </div>

          {/* Sector Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {COVERAGE_SECTORS.map((sector) => {
              const isSelected = sector.id === selectedSectorId;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSectorId(sector.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="line-clamp-2">{sector.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Display in Clean Light Card */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs">
            <div className="lg:w-7/12">
              <span className="text-xs font-mono text-amber-700 font-bold uppercase block mb-1">
                Sector Profile
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">
                {activeSector.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeSector.description}
              </p>
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                <span className="text-slate-800 font-mono font-bold block uppercase text-[10px] mb-0.5">Operational Hazard Focus:</span>
                <span className="text-slate-600">{activeSector.challenges}</span>
              </div>
            </div>

            <div className="lg:w-5/12 bg-slate-50 p-5 rounded-lg border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                Mandated System Architecture:
              </span>
              <ul className="space-y-2 mb-4">
                {activeSector.recommendedSystems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#estimator"
                className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-bold"
              >
                <span>Calculate requirement for this sector</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
