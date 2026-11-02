import React, { useState } from 'react';
import { 
  Flame, 
  ArrowUp, 
  ShieldCheck, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  MapPin,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const [gstCopied, setGstCopied] = useState(false);

  const copyGSTIN = () => {
    navigator.clipboard.writeText(COMPANY_INFO.gstin);
    setGstCopied(true);
    setTimeout(() => setGstCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs">
      {/* Upper Footer: Brand & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-950 border border-amber-500/50 shadow-md shadow-slate-900/10 shrink-0 flex items-center justify-center p-0.5">
                <img 
                  src="/assets/aistudio/op_engineering_logo_circle.png" 
                  alt="O P Engineering Official Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-base font-extrabold text-slate-900 font-heading uppercase tracking-tight block">
                  O P ENGINEERING
                </span>
                <span className="text-[11px] font-mono text-red-600 font-bold uppercase">
                  Fire Fighting Solutions · Estd. 1990
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Specialists in turnkey industrial fire fighting, pump automation, yard hydrant loops, automatic sprinklers, gas suppression (NOVEC 1230 / CO₂), and addressable alarm systems.
            </p>

            {/* GSTIN Badge with instant copy */}
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>GSTIN: <strong className="text-slate-900">{COMPANY_INFO.gstin}</strong></span>
              <button
                onClick={copyGSTIN}
                title="Copy GSTIN"
                className="hover:text-red-600 transition-colors ml-1 p-0.5"
              >
                {gstCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-red-600 font-semibold transition-colors">Turnkey Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-red-600 font-semibold text-red-600 transition-colors">Completed Projects</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-red-600 font-semibold transition-colors">Esteemed Clients & PSUs</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors">About O P Engineering</a>
              </li>
              <li>
                <a href="#management" className="hover:text-red-600 transition-colors">Management & Philosophy</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-red-600 transition-colors">Fire Safety Quote Tool</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors">Contact Leadership</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li>Fire Pump Houses (2850 LPM)</li>
              <li>Automatic Sprinkler ACVs</li>
              <li>Clean Agent NOVEC 1230</li>
              <li>CO₂ Total Flooding Systems</li>
              <li>VESDA Laser Smoke Detection</li>
              <li>Hydrostatic Pressure Testing</li>
              <li>Fire Department NOC Liaison</li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Quick Reference */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-slate-600 font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href="tel:+919472243274" className="hover:text-red-600 text-slate-800 font-semibold">+91 9472243274</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href="tel:+918507302636" className="hover:text-red-600 text-slate-800 font-semibold">+91 8507302636</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a 
                  href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20am%20inquiring%20about%20fire%20fighting%20solutions." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-700 text-emerald-700 font-bold"
                >
                  WhatsApp: +91 8507302636
                </a>
              </li>
              <li className="flex items-center gap-2 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-red-600 text-slate-800 text-[11px] truncate">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-slate-600 font-sans leading-tight">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p><strong>Head:</strong> Balua Bazar, Guthani, Siwan, Bihar - 841435</p>
                  <p className="mt-1"><strong>Branch:</strong> Near Kashi More, Anpara, Sonbhadra, UP</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-slate-200 bg-slate-200/60 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} O P Engineering (Estd. 1990). All rights reserved. GSTIN: {COMPANY_INFO.gstin}.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-500 font-medium">
              NBC 2016 · NFPA · IS Standards Compliant
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs border border-slate-300 shadow-xs transition-colors"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
