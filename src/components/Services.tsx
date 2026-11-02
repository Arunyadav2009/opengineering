import React, { useState } from 'react';
import { 
  Flame, 
  ShieldAlert, 
  Zap, 
  BellRing, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Wrench, 
  BookOpen,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/companyData';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-cyan-400" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Flame className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Comprehensive Fire Protection Services
            </h2>
            <p className="mt-2 text-base text-slate-600 font-body">
              Engineered to IS 15301, IS 3844, IS 15105, IS 2189, and NFPA standards with end-to-end statutory testing and lifecycle consultation.
            </p>
          </div>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 rounded-lg border border-slate-300 text-xs font-bold self-start md:self-auto transition-colors shadow-xs"
          >
            <span>Calculate Equipment Quantity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 border-slate-200' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-mono text-red-600 tracking-wider font-bold uppercase">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key deliverables checklist */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  {service.keyDeliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Standards tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.standards.map((std, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600 font-medium"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">Turnkey execution</span>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Consultation Promo Box filling the 6th slot */}
          <div className="bg-gradient-to-br from-red-50 to-slate-100 border border-red-200 rounded-xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white mb-4 shadow-md shadow-red-600/30">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-red-700 font-bold uppercase">
                Specialized Engineering
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Need a Custom Fire Safety Assessment?
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Our senior engineering team provides on-site hydraulic pressure audits, pipe wall thickness verification, and complete statutory NOC assistance for commercial and industrial complexes.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-red-600/20"
              >
                <span>Request Site Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Technical Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-100 border border-red-200 text-red-700 font-bold">
                {selectedService.category}
              </span>
              <span className="text-xs text-slate-600 font-mono">
                {selectedService.standards.join(' · ')}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              {selectedService.shortDesc}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 font-mono flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-red-600" />
                  <span>Full Key Deliverables & Scope:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedService.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 font-mono flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span>Equipment & Materials Specification:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.equipmentList.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase font-mono block mb-1">
                  Ideal Application Environments:
                </span>
                <p className="text-xs text-slate-600">
                  {selectedService.idealFor}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex gap-3">
              <a
                href="#estimator"
                onClick={() => setSelectedService(null)}
                className="flex-1 text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Estimate This System
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
