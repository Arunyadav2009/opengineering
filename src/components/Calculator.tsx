import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Building2, 
  Layers, 
  Flame, 
  ShieldCheck, 
  CheckSquare, 
  Send, 
  Copy, 
  Check, 
  PhoneCall, 
  Mail, 
  Printer, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface SystemOption {
  id: string;
  name: string;
  category: string;
  description: string;
}

const SYSTEM_OPTIONS: SystemOption[] = [
  {
    id: 'hydrant',
    name: 'Hydrant & Wet Riser Network',
    category: 'Water System',
    description: 'Heavy ERW class C piping, landing valves, hose reels, and 4-way fire brigade inlets.'
  },
  {
    id: 'sprinklers',
    name: 'Automatic Sprinkler System',
    category: 'Water System',
    description: 'Thermal quartzoid bulb ceiling grid with Alarm Check Valve and water motor gong.'
  },
  {
    id: 'co2_gas',
    name: 'CO₂ / Clean Gas (NOVEC 1230) Suppression',
    category: 'Gas Flooding',
    description: 'Total flooding for server rooms, MCC switchgear, transformers & control centers.'
  },
  {
    id: 'alarm_vesda',
    name: 'Alarm & VESDA Detection System',
    category: 'Life Safety Alarm',
    description: 'Microprocessor fire alarm panel, smoke/heat sensors, beam detectors, and aspirating lasers.'
  },
  {
    id: 'turnkey',
    name: 'Complete Turnkey Execution (Pumps, Piping & Panels)',
    category: 'Full Scope',
    description: 'Turnkey integration of fire pump house (2850 LPM), underground yard loops, and statutory NOC.'
  }
];

export const FireCalculator: React.FC = () => {
  const propertyTypeId = useId();
  const areaInputId = useId();
  const floorsInputId = useId();
  const clientNameId = useId();
  const clientPhoneId = useId();
  const clientEmailId = useId();
  const clientCityId = useId();
  const clientNotesId = useId();

  // Form State
  const [propertyType, setPropertyType] = useState<'power_plant' | 'refinery' | 'commercial' | 'residential' | 'warehouse'>('power_plant');
  const [areaSqFt, setAreaSqFt] = useState<number>(35000);
  const [numFloors, setNumFloors] = useState<number>(4);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([
    'hydrant',
    'sprinklers',
    'turnkey',
    'alarm_vesda'
  ]);
  
  // Contact details
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  // UI state
  const [copied, setCopied] = useState(false);
  const [submittedModalOpen, setSubmittedModalOpen] = useState(false);
  const [dispatchMethod, setDispatchMethod] = useState<'whatsapp' | 'email' | null>(null);

  const toggleSystem = (id: string) => {
    if (selectedSystems.includes(id)) {
      if (selectedSystems.length > 1) {
        setSelectedSystems(selectedSystems.filter((item) => item !== id));
      }
    } else {
      setSelectedSystems([...selectedSystems, id]);
    }
  };

  // Calculations based on National Building Code (NBC-2016 Part 4) & NFPA
  const calculateRequirements = () => {
    let pumpCapacityLPM = 2850;
    let staticWaterStorageLitres = 200000;
    let terraceTankLitres = 25000;
    let sprinklerSpacingSqFt = 100;
    let estimatedSprinklers = 0;
    let estimatedHydrantPoints = Math.max(4, Math.ceil(areaSqFt / 8000) * 2);

    if (propertyType === 'power_plant') {
      pumpCapacityLPM = 5700; // Dual 2850 LPM or high-flow deluge
      staticWaterStorageLitres = areaSqFt > 50000 ? 500000 : 350000;
      terraceTankLitres = 50000;
      sprinklerSpacingSqFt = 75;
      estimatedHydrantPoints = Math.max(8, Math.ceil(areaSqFt / 5000) * 2);
    } else if (propertyType === 'refinery') {
      pumpCapacityLPM = 5700;
      staticWaterStorageLitres = areaSqFt > 50000 ? 600000 : 400000;
      terraceTankLitres = 50000;
      sprinklerSpacingSqFt = 70;
      estimatedHydrantPoints = Math.max(8, Math.ceil(areaSqFt / 4500) * 2);
    } else if (propertyType === 'warehouse') {
      pumpCapacityLPM = 2850;
      staticWaterStorageLitres = 250000;
      terraceTankLitres = 25000;
      sprinklerSpacingSqFt = 80;
    } else if (propertyType === 'residential') {
      pumpCapacityLPM = numFloors > 10 ? 2850 : 1620;
      staticWaterStorageLitres = numFloors > 10 ? 150000 : 75000;
      terraceTankLitres = 10000;
      sprinklerSpacingSqFt = 130;
    } else {
      // commercial complex / mall
      pumpCapacityLPM = areaSqFt > 30000 ? 2850 : 2280;
      staticWaterStorageLitres = areaSqFt > 30000 ? 250000 : 150000;
      terraceTankLitres = 20000;
      sprinklerSpacingSqFt = 100;
    }

    if (selectedSystems.includes('sprinklers')) {
      estimatedSprinklers = Math.ceil(areaSqFt / sprinklerSpacingSqFt);
    }

    const estimatedExtinguishers = Math.max(6, Math.ceil(areaSqFt / 2500) * 2);
    const estimatedHoseReels = Math.max(numFloors, Math.ceil(areaSqFt / 8000) * numFloors);

    return {
      pumpCapacityLPM,
      staticWaterStorageLitres,
      terraceTankLitres,
      estimatedSprinklers,
      estimatedHydrantPoints,
      estimatedHoseReels,
      estimatedExtinguishers
    };
  };

  const results = calculateRequirements();

  // Generate clean formatted specification summary
  const generateSpecText = () => {
    const selectedSystemNames = SYSTEM_OPTIONS
      .filter((s) => selectedSystems.includes(s.id))
      .map((s) => `• ${s.name}`)
      .join('\n');

    return `FIRE SAFETY REQUIREMENT ESTIMATE
Organization: O P Engineering (Estd. 1990)
GSTIN: ${COMPANY_INFO.gstin}

CLIENT INQUIRY DETAILS:
• Name: ${clientName || 'Inquirer'}
• Phone: ${clientPhone || 'Not specified'}
• Email: ${clientEmail || 'Not specified'}
• Location: ${clientCity || 'Not specified'}
• Property Type: ${propertyType.toUpperCase()}
• Total Area: ${areaSqFt.toLocaleString()} sq. ft.
• Number of Floors: ${numFloors}

RECOMMENDED NBC-2016 TECHNICAL SPECS:
• Primary Fire Pump Capacity: ${results.pumpCapacityLPM} LPM
• Static Underground Storage Reservoir: ${results.staticWaterStorageLitres.toLocaleString()} Litres
• Terrace Gravity Water Tank: ${results.terraceTankLitres.toLocaleString()} Litres
• Estimated Sprinkler Heads Required: ${results.estimatedSprinklers > 0 ? results.estimatedSprinklers : 'Not Selected'}
• Estimated External/Internal Hydrant Landing Points: ${results.estimatedHydrantPoints}
• First-Aid Hose Reel Stations: ${results.estimatedHoseReels}
• Portable Fire Extinguishers (ABC/CO2): ${results.estimatedExtinguishers} Units

REQUESTED SCOPE OF WORK:
${selectedSystemNames}

${clientNotes ? `ADDITIONAL NOTES:\n${clientNotes}\n` : ''}
DIRECT LEADERSHIP CONTACT:
Gorakhnath Yadav (Owner & Founder): +91 9472243274
Kishan Kumar Yadav (Owner & CEO): +91 8507302636
Email: ${COMPANY_INFO.email}`;
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(generateSpecText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = (targetPhone = '918507302636') => {
    setDispatchMethod('whatsapp');
    const text = encodeURIComponent(generateSpecText());
    window.open(`https://wa.me/${targetPhone}?text=${text}`, '_blank');
    setSubmittedModalOpen(true);
  };

  const handleEmail = () => {
    setDispatchMethod('email');
    const subject = encodeURIComponent(`Fire Fighting System Quote Inquiry - ${clientName || propertyType} (${clientCity || 'Site'})`);
    const body = encodeURIComponent(generateSpecText());
    window.open(`mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmittedModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="estimator" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Enterprise Quotation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Quick Project RFP / Quotation Tool
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Select facility type, specify required fire protection systems, and compute baseline pump capacities and static storage compliant with National Building Code (NBC) 2016 Part 4.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-red-600" />
              <span>Step 1: Facility Parameters & Built-up Area</span>
            </h3>

            {/* Property Type Grid */}
            <div className="mb-6">
              <label htmlFor={propertyTypeId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 font-mono">
                Facility Occupancy Classification
              </label>
              <div id={propertyTypeId} className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'power_plant', label: 'Power Plant' },
                  { id: 'refinery', label: 'Refineries' },
                  { id: 'commercial', label: 'Commercial Complex' },
                  { id: 'residential', label: 'High-Rise' },
                  { id: 'warehouse', label: 'Warehouse' },
                ].map((type) => {
                  const isSel = propertyType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setPropertyType(type.id as typeof propertyType)}
                      className={`px-3 py-2.5 text-xs font-semibold rounded-lg border text-left transition-all ${
                        isSel 
                          ? 'bg-red-600 border-red-600 text-white shadow-xs' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Area and Floors Slider & Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={areaInputId} className="text-xs font-semibold text-slate-700">Total Built-up Area (sq. ft.)</label>
                  <span className="text-sm font-mono font-bold text-red-600">
                    {areaSqFt.toLocaleString()} sq.ft.
                  </span>
                </div>
                <input
                  id={areaInputId}
                  type="range"
                  min="2000"
                  max="250000"
                  step="1000"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>2,000</span>
                  <span>100,000</span>
                  <span>250,000+</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={floorsInputId} className="text-xs font-semibold text-slate-700">Number of Floors / Levels</label>
                  <span className="text-sm font-mono font-bold text-red-600">
                    {numFloors} {numFloors === 1 ? 'Floor' : 'Floors'}
                  </span>
                </div>
                <input
                  id={floorsInputId}
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={numFloors}
                  onChange={(e) => setNumFloors(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>Ground Only (1)</span>
                  <span>15 Floors</span>
                  <span>30+ (High Rise)</span>
                </div>
              </div>
            </div>

            {/* Step 2: System Selection */}
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pt-2 border-t border-slate-200">
              <Layers className="w-5 h-5 text-red-600" />
              <span>Step 2: Required Systems & Execution Scope</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {SYSTEM_OPTIONS.map((sys) => {
                const isChecked = selectedSystems.includes(sys.id);
                return (
                  <button
                    key={sys.id}
                    type="button"
                    onClick={() => toggleSystem(sys.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-all ${
                      isChecked
                        ? 'bg-red-50/70 border-red-500 text-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-red-600" />
                      ) : (
                        <div className="w-4 h-4 rounded border border-slate-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold block leading-snug">{sys.name}</span>
                      <span className="text-[11px] text-slate-600 leading-tight block mt-0.5">{sys.description}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step 3: Contact & City */}
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pt-2 border-t border-slate-200">
              <PhoneCall className="w-5 h-5 text-red-600" />
              <span>Step 3: Contact Details for Official Estimate</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label htmlFor={clientNameId} className="block text-xs font-medium text-slate-700 mb-1">Your Name / Organization *</label>
                <input
                  id={clientNameId}
                  type="text"
                  placeholder="e.g. Project In-charge / Industrial Plant"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                />
              </div>
              <div>
                <label htmlFor={clientPhoneId} className="block text-xs font-medium text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  id={clientPhoneId}
                  type="tel"
                  placeholder="e.g. +91 9876543210"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label htmlFor={clientEmailId} className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  id={clientEmailId}
                  type="email"
                  placeholder="name@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                />
              </div>
              <div>
                <label htmlFor={clientCityId} className="block text-xs font-medium text-slate-700 mb-1">City / Project Site Location *</label>
                <input
                  id={clientCityId}
                  type="text"
                  placeholder="e.g. Siwan, Sonbhadra, Patna, Lucknow"
                  value={clientCity}
                  onChange={(e) => setClientCity(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor={clientNotesId} className="block text-xs font-medium text-slate-700 mb-1">Special Site Requirements or Deadlines</label>
              <textarea
                id={clientNotesId}
                rows={2}
                placeholder="Mention any high-voltage transformers, server rooms, or upcoming municipal NOC inspection dates..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 resize-none shadow-xs"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Engineering Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-lg relative sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-mono text-red-600 uppercase tracking-wider block font-bold">
                  NBC 2016 Compliant Estimate
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Tailored Project Scope
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-red-100 border border-red-200 text-red-700 font-mono text-xs font-bold">
                {propertyType.toUpperCase()}
              </span>
            </div>

            {/* Key Calculated Metrics */}
            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 block font-mono font-medium">Main Fire Pump Flow</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{results.pumpCapacityLPM} LPM</span>
                <span className="text-[10px] text-slate-500 block">IS 15301 / NFPA 20</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 block font-mono font-medium">Static Sump Reservoir</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{results.staticWaterStorageLitres.toLocaleString()} L</span>
                <span className="text-[10px] text-slate-500 block">Underground Capacity</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 block font-mono font-medium">Estimated Sprinklers</span>
                <span className="text-lg font-bold text-slate-900 font-mono">
                  {results.estimatedSprinklers > 0 ? `${results.estimatedSprinklers} Nos.` : 'N/A'}
                </span>
                <span className="text-[10px] text-slate-500 block">Quartzoid 68°C Heads</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 block font-mono font-medium">Hydrant / Hose Points</span>
                <span className="text-lg font-bold text-slate-900 font-mono">
                  {results.estimatedHydrantPoints} Ext / {results.estimatedHoseReels} Int
                </span>
                <span className="text-[10px] text-slate-500 block">63mm Gunmetal Valves</span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 mb-5 text-xs">
              <span className="font-bold text-slate-800 block mb-2 font-mono uppercase text-[11px]">
                Engineering Deliverables Included:
              </span>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Hydrostatic pressure test certification up to 15 kg/cm²</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Piping network isometric drafting & hydraulic calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Statutory Fire Service NOC technical dossier preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>Dual starter MCC panel with diesel engine backup linkage</span>
                </li>
              </ul>
            </div>

            {/* Dispatch CTA Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => handleWhatsApp('918507302636')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors text-sm shadow-md shadow-emerald-600/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Quote Request via WhatsApp (to Er. Kishan)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-xs shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Official RFQ</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySpec}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors text-xs border border-slate-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copy Spec Sheet</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs rounded border border-slate-200 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save Estimate Sheet</span>
              </button>
            </div>

            {/* Direct hotline note */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-2">
              <span>Direct Leadership WhatsApp:</span>
              <a href="https://wa.me/918507302636" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-mono hover:underline font-bold">
                Er. Kishan: +91 8507302636
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-300 rounded-xl p-6 max-w-md w-full shadow-2xl relative">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-950 border-2 border-amber-500/50 flex items-center justify-center mx-auto mb-4 p-1 shadow-md">
              <img 
                src="/assets/aistudio/op_engineering_logo_circle.png" 
                alt="O P Engineering Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <h3 className="text-xl font-bold text-center text-slate-900 mb-2">
              Estimate Inquiry Initiated!
            </h3>
            <p className="text-xs text-slate-600 text-center mb-5">
              Your customized NBC-2016 fire safety scope has been formatted. Our leadership Gorakhnath Yadav (Founder) and Kishan Kumar Yadav (Owner & CEO) will review the parameters and provide the final detailed BOQ.
            </p>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 mb-5 space-y-1">
              <p><strong>Property:</strong> {propertyType.toUpperCase()} ({areaSqFt.toLocaleString()} sq.ft.)</p>
              <p><strong>Primary Pump:</strong> {results.pumpCapacityLPM} LPM</p>
              <p><strong>Underground Tank:</strong> {results.staticWaterStorageLitres.toLocaleString()} Litres</p>
              <p><strong>Direct Dispatch:</strong> {dispatchMethod === 'whatsapp' ? 'WhatsApp Sent to Er. Kishan Kumar Yadav (+91 8507302636)' : 'Email Client Triggered'}</p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSubmittedModalOpen(false)}
                className="flex-1 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Done
              </button>
              <button
                type="button"
                onClick={handleCopySpec}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300"
              >
                {copied ? 'Copied' : 'Copy Spec'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
