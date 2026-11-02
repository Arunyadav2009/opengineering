import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, ShieldCheck, Flame, Phone, Building, FileText, ChevronRight } from 'lucide-react';
import { SERVICES, CLIENTS, TEAM_MEMBERS, COMPLETED_PROJECTS, COMPANY_INFO } from '../data/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult?: (targetId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  const matchedServices = SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(cleanQ) ||
      s.shortDesc.toLowerCase().includes(cleanQ) ||
      s.standards.some((st) => st.toLowerCase().includes(cleanQ))
  );

  const matchedProjects = COMPLETED_PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(cleanQ) ||
      p.client.toLowerCase().includes(cleanQ) ||
      p.location.toLowerCase().includes(cleanQ) ||
      p.scope.toLowerCase().includes(cleanQ)
  );

  const matchedClients = CLIENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(cleanQ) ||
      c.location.toLowerCase().includes(cleanQ) ||
      c.scopeOfWork.toLowerCase().includes(cleanQ) ||
      c.sector.toLowerCase().includes(cleanQ)
  );

  const matchedTeam = TEAM_MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(cleanQ) ||
      m.role.toLowerCase().includes(cleanQ) ||
      m.specialization.toLowerCase().includes(cleanQ)
  );

  const handleNavigate = (hash: string) => {
    onClose();
    if (onSelectResult) {
      onSelectResult(hash);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search systems, clients (NTPC, BHEL), standards (IS/NFPA), or contacts..."
            className="w-full text-base bg-transparent border-none text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions / Results */}
        <div className="p-4 overflow-y-auto space-y-6">
          {cleanQ === '' ? (
            <div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Frequent Industrial Searches
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Fire Pump Houses', hash: '#services' },
                  { label: 'Yard Hydrant Loops', hash: '#services' },
                  { label: 'Automatic Sprinklers', hash: '#services' },
                  { label: 'NOVEC 1230 & CO₂', hash: '#services' },
                  { label: 'VESDA Laser Detection', hash: '#services' },
                  { label: 'NTPC & BHEL Projects', hash: '#clients' },
                  { label: 'UPRVUNL Anpara', hash: '#clients' },
                  { label: 'GSTIN & Legal Info', hash: '#about' },
                  { label: 'Executive Team', hash: '#management' },
                  { label: 'Request RFP / Quote', hash: '#estimator' },
                  { label: 'Siwan & Anpara Offices', hash: '#contact' },
                  { label: 'Emergency Hotlines', hash: '#contact' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(item.hash)}
                    className="flex items-center justify-between text-left p-2.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-700 border border-slate-200 hover:border-red-200 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Services matches */}
              {matchedServices.length > 0 && (
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-600" />
                    <span>Solutions & Systems ({matchedServices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleNavigate('#services')}
                        className="w-full text-left p-3 rounded-lg hover:bg-slate-50 border border-slate-200 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-red-600">
                            {service.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {service.shortDesc}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Projects matches */}
              {matchedProjects.length > 0 && (
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    <span>Completed Projects ({matchedProjects.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedProjects.map((proj) => (
                      <button
                        key={proj.id}
                        onClick={() => handleNavigate('#projects')}
                        className="w-full text-left p-3 rounded-lg hover:bg-slate-50 border border-slate-200 flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-red-600">
                            {proj.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {proj.client} · {proj.location}, {proj.state} · {proj.pumpCapacity}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Clients matches */}
              {matchedClients.length > 0 && (
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-600" />
                    <span>PSU & Major Clients ({matchedClients.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedClients.map((client) => (
                      <button
                        key={client.id}
                        onClick={() => handleNavigate('#clients')}
                        className="w-full text-left p-3 rounded-lg hover:bg-slate-50 border border-slate-200 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                            {client.name} — <span className="font-mono text-xs font-normal text-slate-500">{client.location}</span>
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {client.scopeOfWork}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Team matches */}
              {matchedTeam.length > 0 && (
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Executive Leadership ({matchedTeam.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedTeam.map((member) => (
                      <button
                        key={member.name}
                        onClick={() => handleNavigate('#management')}
                        className="w-full text-left p-3 rounded-lg hover:bg-slate-50 border border-slate-200 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                            {member.name} — <span className="font-mono text-xs text-red-600 font-semibold">{member.role}</span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {member.specialization}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedServices.length === 0 && matchedClients.length === 0 && matchedTeam.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-sm text-slate-600">No direct results found for "{query}".</p>
                  <p className="text-xs text-slate-400 mt-1">Try searching for "NTPC", "Hydrant", "Pump", "BHEL", or "Gorakhnath Yadav".</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>O P Engineering · GSTIN: {COMPANY_INFO.gstin}</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
