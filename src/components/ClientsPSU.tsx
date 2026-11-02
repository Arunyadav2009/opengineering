import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  Layers, 
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';
import { CLIENTS, ClientItem } from '../data/companyData';

export const ClientsPSU: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const sectors = ['All', 'Power', 'Oil & Gas', 'Steel & Mining', 'Judiciary & Public'];

  const filteredClients = selectedFilter === 'All'
    ? CLIENTS
    : CLIENTS.filter((c) => c.sector === selectedFilter);

  return (
    <section id="clients" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Public & Enterprise Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Esteemed Clients & Government PSU Partners
          </h2>
          <p className="mt-3 text-base text-slate-600 font-body">
            Trusted by India’s sovereign power generation corporations, petrochemical refineries, steel authorities, and judicial state complexes.
          </p>
        </div>

        {/* Prominent PSU Logo Showcase Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-xs">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
              Official Client Roster & PSU Credentials
            </span>
            <span className="text-xs text-slate-400">
              National critical infrastructure sites commissioned & serviced by O P Engineering
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {CLIENTS.map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-xl p-3 border border-slate-200 hover:border-red-500 shadow-xs flex flex-col items-center justify-center text-center group transition-all hover:-translate-y-0.5"
                title={`${client.name} - ${client.location}`}
              >
                <div className="w-16 h-14 flex items-center justify-center p-1 mb-2">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain filter group-hover:contrast-125 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-slate-900 leading-tight block">
                  {client.shortName}
                </span>
                <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedFilter(sec)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === sec
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Client Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-white transition-all shadow-xs group"
            >
              <div>
                {/* Header with Official Logo */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:border-red-500 transition-colors">
                      <img 
                        src={client.logoUrl} 
                        alt={`${client.name} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-red-600 font-bold block uppercase tracking-wider">
                        {client.sector}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {client.shortName}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {client.location}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-600 font-mono flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-xs shrink-0 self-start">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>{client.state}</span>
                  </span>
                </div>

                <p className="text-xs font-bold text-slate-900 mb-2">
                  {client.name}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {client.scopeOfWork}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[11px] text-slate-700 font-mono flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{client.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Strip */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Strict Statutory Compliance & Central Safety Norms
              </h4>
              <p className="text-xs text-slate-600">
                Turnkey compliance with OISD (Oil Industry Safety Directorate), CEA, NBC Part 4, and Central Electricity Authority regulations.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors shadow-xs"
          >
            Partner with O P Engineering
          </a>
        </div>

      </div>
    </section>
  );
};
