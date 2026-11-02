import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Gauge, 
  Flame, 
  ArrowUpRight, 
  FileCheck2,
  Filter,
  Check,
  Camera
} from 'lucide-react';
import { COMPLETED_PROJECTS, ProjectItem } from '../data/companyData';

export const CompletedProjects: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const sectors = [
    'All',
    'Thermal Power',
    'Heavy Engineering',
    'Oil & Gas',
    'Steel & Mining',
    'Judiciary & Public'
  ];

  const filteredProjects = selectedSector === 'All'
    ? COMPLETED_PROJECTS
    : COMPLETED_PROJECTS.filter((p) => p.sector === selectedSector);

  const getClientLogo = (clientName: string) => {
    if (clientName.includes('NTPC')) return '/assets/clients/ntpc.svg';
    if (clientName.includes('BHEL')) return '/assets/clients/bhel.svg';
    if (clientName.includes('Rajya') || clientName.includes('UPRVUNL')) return '/assets/clients/uprvunl.svg';
    if (clientName.includes('HMEL')) return '/assets/clients/hmel.jpg';
    if (clientName.includes('Indian Oil') || clientName.includes('IOCL')) return '/assets/clients/iocl.svg';
    if (clientName.includes('Judicial') || clientName.includes('Court')) return '/assets/clients/high_court.svg';
    if (clientName.includes('NMDC')) return '/assets/clients/nmdc.jpg';
    return null;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Verified On-Site Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Completed Turnkey Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 font-body">
              A proven portfolio of critical fire fighting networks, high-pressure pump houses, and gas suppression grids delivered across India since 1990.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <a
              href="#on-site-glance"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold font-mono transition-colors shadow-xs cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Field Photos (6)</span>
            </a>

            <a
              href="#estimator"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <span>Request Project Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Clean Filter Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <span className="text-xs font-mono text-slate-500 font-bold uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-red-600" />
            <span>Filter Sector:</span>
          </span>
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedSector === sec
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-xs group"
            >
              <div>
                {/* Card Top: Client & Location */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-bold">
                    {project.sector}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>{project.location}, {project.state}</span>
                  </span>
                </div>

                {/* Client Logo & Title Lockup */}
                <div className="flex items-start gap-3 mb-3">
                  {getClientLogo(project.client) && (
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                      <img 
                        src={getClientLogo(project.client)!} 
                        alt={project.client} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-red-600 font-semibold mt-0.5">
                      Client: {project.client}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.scope}
                </p>

                {/* Technical Metrics Pill */}
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-[11px] font-mono mb-4">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Pump Flow</span>
                    <span className="text-slate-900 font-bold">{project.pumpCapacity}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase">Hydro-Test</span>
                    <span className="text-emerald-700 font-bold">{project.testPressure}</span>
                  </div>
                </div>

                {/* Systems Installed Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.systemsInstalled.map((sys, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Status & Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{project.status}</span>
                </span>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-bold transition-colors cursor-pointer"
                >
                  <span>View Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Assurance Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% On-Site Testing Guarantee for Every Commissioned Network
              </h4>
              <p className="text-xs text-slate-600">
                All installed pipelines undergo sustained hydrostatic testing up to 15 kg/cm² witnessed and certified for statutory audit approval.
              </p>
            </div>
          </div>

          <a
            href="#estimator"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-200 transition-colors whitespace-nowrap"
          >
            Get Scope for Your Site
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-300 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-xs font-mono font-bold text-red-600 uppercase">
                Project Dossier · {activeModalProject.sector}
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-slate-700 font-mono text-sm px-2 py-0.5 rounded hover:bg-slate-100"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {activeModalProject.title}
            </h3>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-4">
              <span>Client: <strong className="text-slate-800">{activeModalProject.client}</strong></span>
              <span>•</span>
              <span>{activeModalProject.location}, {activeModalProject.state}</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mb-4">
              <strong className="block text-slate-900 font-mono uppercase mb-1">Execution Scope & Equipment:</strong>
              {activeModalProject.scope}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block uppercase">Pumping Array</span>
                <span className="text-slate-900 font-bold">{activeModalProject.pumpCapacity}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 text-[10px] block uppercase">Pressure Verification</span>
                <span className="text-emerald-700 font-bold">{activeModalProject.testPressure}</span>
              </div>
            </div>

            <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-xs text-slate-800 mb-5">
              <strong className="font-mono text-amber-900 block mb-0.5 uppercase text-[10px]">Operational Safety Impact:</strong>
              {activeModalProject.keyImpact}
            </div>

            <div className="flex gap-2">
              <a
                href="#estimator"
                onClick={() => setActiveModalProject(null)}
                className="flex-1 text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Request Similar System Specification
              </a>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
