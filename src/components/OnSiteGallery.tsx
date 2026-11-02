import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  Flame, 
  Wrench, 
  Truck, 
  Gauge, 
  FileCheck2, 
  MessageSquare,
  Building2,
  HardHat,
  RotateCcw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export interface OnSitePhoto {
  id: string;
  title: string;
  category: 'Pump House' | 'Conveyor & Risers' | 'Deluge & Valves' | 'Yard Piping' | 'Logistics' | 'Emergency Standby' | 'Safety & TBT' | 'Team on Site';
  image: string;
  location: string;
  scopeSummary: string;
  specs: {
    label: string;
    value: string;
  }[];
  standards: string[];
  keyHighlight: string;
  description: string;
}

export const ON_SITE_PHOTOS: OnSitePhoto[] = [
  {
    id: 'pump-house-manifold',
    title: 'Heavy Industrial Fire Pump House & Manifold Assembly',
    category: 'Pump House',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.40_0f66c814.jpeg',
    location: 'Thermal Power Utility · Core Plant Pump House',
    scopeSummary: 'Heavy multi-stage pump headers, suction & discharge manifolds with overhead monorail maintenance hoist.',
    specs: [
      { label: 'Pumping Capacity', value: '2850 LPM @ 10.5 kg/cm² Multi-Stage' },
      { label: 'Manifold Piping', value: 'Class C Heavy ERW Suction/Delivery Header' },
      { label: 'Valves & Automation', value: 'Flanged Sluice, Dual-Plate NRV & Pressure Relief' },
      { label: 'Lifting Infrastructure', value: 'Integrated Overhead Travelling Monorail Crane' }
    ],
    standards: ['IS 15105:2021', 'TAC Industrial Pumping Code', 'NFPA 20'],
    keyHighlight: 'Dual-drive electric & diesel backup pump integration with automatic hydro-pneumatic pressure maintenance.',
    description: 'Interior view of turnkey fire water pump house engineered and erected by O P Engineering. Demonstrates high-precision fabrication of large-bore headers, anti-vibration inertia bases, and full compliance with Central Electricity Authority (CEA) safety guidelines.'
  },
  {
    id: 'conveyor-gallery-risers',
    title: 'High-Elevation Coal Conveyor Gallery Fire Suppression',
    category: 'Conveyor & Risers',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.43__1__47d39b43.jpeg',
    location: 'Coal Handling Plant (CHP) · Tunnel & Trestle Gallery',
    scopeSummary: 'Underground/overhead coal belt conveyor deluge piping installation executed by certified high-altitude technicians.',
    specs: [
      { label: 'Protection System', value: 'High-Velocity Water Spray (HVWS) & Deluge' },
      { label: 'Piping Specification', value: 'Heavy Gauge Red Primer Welded ERW Steel' },
      { label: 'Detection Interlock', value: 'Continuous Linear Heat Sensing (LHD) Cable' },
      { label: 'Site Safety Protocol', value: '100% Fall Arrest Harness & Confined Space Safety' }
    ],
    standards: ['IS 3037', 'TAC Coal Handling Guidelines', 'NBC Part 4'],
    keyHighlight: 'Turnkey overhead mounting above active high-tonnage coal conveyor belts to mitigate spontaneous combustion.',
    description: 'Our certified field installation crew in protective safety equipment manually positioning and anchoring overhead deluge sprinkler risers inside a hazardous coal conveyor transfer gallery. Built to deliver instant thermal deluge during bulk fuel transit.'
  },
  {
    id: 'deluge-valve-alarm-gong',
    title: 'Deluge Valve Station & Mechanical Water Motor Alarm Gong',
    category: 'Deluge & Valves',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.41_4ece69ca.jpeg',
    location: 'Bulk Fuel Storage & Chemical Process Tank Farm',
    scopeSummary: 'Heavy cast deluge valve assembly with mechanical water gong providing fail-safe audible alert without electrical power.',
    specs: [
      { label: 'Valve Diameter', value: '150mm / 200mm Heavy Cast Iron Deluge' },
      { label: 'Alarm Mechanism', value: 'Hydraulic Water Motor Mechanical Gong' },
      { label: 'Hydrostatic Test', value: 'Proof-Tested at 18 kg/cm² (Factory & Field)' },
      { label: 'Trim Arrangement', value: 'Full Wet/Dry Actuation Trim & Solenoid Bypass' }
    ],
    standards: ['IS 13039', 'NFPA 15', 'TAC Sprinkler Committee'],
    keyHighlight: 'Zero-power acoustic gong rings mechanically via water turbine flow during activation even during total power grid failure.',
    description: 'Field snapshot of an outdoor deluge valve skid serving high-hazard hydrocarbon and chemical storage vessels. The mechanical bronze water motor gong is mounted directly to the masonry wall, ensuring uncompromised life-safety warning under extreme emergency conditions.'
  },
  {
    id: 'yard-hydrant-trenching',
    title: 'External Yard Hydrant Network Trenching & Arc Welding',
    category: 'Yard Piping',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.39_7d416d8f.jpeg',
    location: 'Heavy Industrial Project Site · Underground Ring Main',
    scopeSummary: 'Sub-surface pipe laying, bevel cutting, precision manual metal arc welding (SMAW), and anti-corrosive coating.',
    specs: [
      { label: 'Piping Standard', value: 'IS 1239 / IS 3589 Class C Heavy Carbon Steel' },
      { label: 'Joining Method', value: 'Full-Penetration Welded Joints with Chamfering' },
      { label: 'Corrosion Shield', value: 'Multi-layer Bituminous & Coal Tar Epoxy Wrap' },
      { label: 'Field Supervision', value: 'Guided on-ground by Senior Safety Engineers' }
    ],
    standards: ['IS 1239 (Pt 1)', 'IS 10221:2008', 'ASME Section IX Welding'],
    keyHighlight: 'Sub-surface ring main engineered with dedicated sectional isolation valves for uninterrupted plant safety.',
    description: 'O P Engineering site crew executing pipe chamfering, alignment, and certified arc welding in rugged site conditions prior to trench burial. Every weld is rigorously inspected and hydrostatic-tested to safeguard against sub-surface soil movement and water hammer shock.'
  },
  {
    id: 'large-diameter-pipe-convoy',
    title: 'Large-Diameter ERW Fire Piping Heavy Transport Convoy',
    category: 'Logistics',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.43_ee7da30d.jpeg',
    location: 'Project Site Inbound Logistics · Dedicated Pipeline Transport',
    scopeSummary: 'Direct factory-to-site freight convoy delivering heavy-diameter fire protection piping for turnkey project execution.',
    specs: [
      { label: 'Cargo Profile', value: 'High-Ton Multi-Trailer Pipe Shipment' },
      { label: 'Pipe Specifications', value: 'Large-Bore Class C Mill-Certified ERW Pipes' },
      { label: 'Logistics Control', value: 'Turnkey Supply Chain Managed In-House' },
      { label: 'Staging Area', value: 'Direct Plant Perimeter Material Yard' }
    ],
    standards: ['IS 1239 / IS 3589', 'Factory Test Mill Certificates (3.1)', 'QA/QC Verified'],
    keyHighlight: 'Eliminates intermediary contractor delays through our established direct mill procurement and logistics fleet.',
    description: 'Heavy multi-axle carrier convoy arriving at industrial project site with prime-grade steel fire piping. Demonstrates O P Engineering’s capability to stage, mobilize, and manage massive material inventories for multi-crore public sector and private engineering contracts.'
  },
  {
    id: 'emergency-fire-tender',
    title: 'Industrial Fire Tender Standby & Site Commissioning Unit',
    category: 'Emergency Standby',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.42_507ffadd.jpeg',
    location: 'Plant Security Gate / Operational Commissioning Perimeter',
    scopeSummary: 'Mobile industrial fire fighting tender with water/foam monitor on active hot-work standby with operations team.',
    specs: [
      { label: 'Vehicle Profile', value: 'Industrial Water-cum-Foam Crash Tender (UP 64 AT 1800)' },
      { label: 'Monitor Equipment', value: 'High-Pressure Roof Deck Water Cannon' },
      { label: 'Auxiliary Gear', value: 'Heavy Duty Hose Reels, Portable Welder & BA Sets' },
      { label: 'Coordination', value: 'CISF Security & Industrial Safety Team Alignment' }
    ],
    standards: ['IS 951 / IS 10460', 'State Industrial Fire Norms', 'Emergency Action Plan'],
    keyHighlight: 'Immediate first-response safety shield maintained during critical welding, gas filling, and testing phases.',
    description: 'On-site heavy fire fighting tender parked at the plant perimeter gate with our field technicians and facility security officers conducting pre-shift verification of firefighting pressure apparatus and emergency monitor readiness.'
  },
  {
    id: 'safety-toolbox-talk-briefing',
    title: 'Pre-Shift Safety Briefing & Tool-Box Talk (TBT)',
    category: 'Safety & TBT',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.35_5d9d5365.jpeg',
    location: 'Project Site Office & Engineering Base · Pre-Commissioning Zone',
    scopeSummary: 'Site safety engineer addressing the field technician squad with mandatory safety checklists and Minimax fire protocol review.',
    specs: [
      { label: 'Induction Protocol', value: 'Daily Pre-Shift Tool-Box Talk (TBT) & Hazard ID' },
      { label: 'PPE Standard', value: '100% Mandatory Hard Hats, High-Vis Vests & Steel Boots' },
      { label: 'Work Permits', value: 'Hot-Work & Confined Space Authorization Checked' },
      { label: 'Safety Guidelines', value: 'Minimax Equipment Audit & Fire Safety Work Procedure' }
    ],
    standards: ['IS 14489:2018', 'Factory Act 1948 Safety Norms', 'Zero-Harm Policy'],
    keyHighlight: 'Zero-lost-time injury record enforced through strict pre-shift hazard briefings prior to entering hazardous plant zones.',
    description: 'Our site safety supervisor conducting the morning Tool-Box Talk (TBT) with certified installation technicians outside the site engineering office. Work permits, personal protective gear, and specialized deluge and hydrant apparatus procedures are thoroughly checked before commencing work.'
  },
  {
    id: 'safety-induction-assembly',
    title: 'Plant-Wide Safety Induction & Full Crew Alignment',
    category: 'Safety & TBT',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.36_83a57114.jpeg',
    location: 'Material Staging Yard & Project Site Storage Perimeter',
    scopeSummary: 'Comprehensive safety assembly of 16+ pipeline fabricators, riggers, and welders before line hydrotesting and overhead erection.',
    specs: [
      { label: 'Crew Strength', value: '16+ Specialized Fire Pipeline Welders & Technicians' },
      { label: 'Assembly Scope', value: 'Safe Rigging, Trench Shoring & High-Elevation Precautions' },
      { label: 'Method Statement', value: 'Safe Work Method Statement (SWMS) & Pre-Job Hazard Check' },
      { label: 'Supervision', value: 'Field Engineers directly aligned with client safety protocols' }
    ],
    standards: ['OSHA 1926 Guidelines', 'IS 3786 (Industrial Safety)', 'CEA Safety Regulations'],
    keyHighlight: 'Complete turnkey team alignment ensuring flawless execution of high-risk fire network erection in live plant conditions.',
    description: 'Full installation and fabrication squad lined up in semi-circle for morning safety induction at our on-site material staging yard. Senior field engineers systematically brief the crew on overhead line hoisting safety, trench shoring, and high-pressure water test protocols.'
  },
  {
    id: 'team-industrial-crew-tender',
    title: 'Meet The Team: Turnkey Field Crew & Operations Squad',
    category: 'Team on Site',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.41_58a912d5.jpeg',
    location: 'Industrial Complex Perimeter Gate · Site Commissioning Zone',
    scopeSummary: 'Turnkey site engineering workforce assembled with mobile emergency fire tender ready for high-temperature and hot-work contracts.',
    specs: [
      { label: 'Deployment Squad', value: '18+ Certified Piping Fabricators, Fitters & Supervisors' },
      { label: 'Safety Standby', value: 'Industrial Water-cum-Foam Fire Tender on Active Watch' },
      { label: 'Specialization', value: 'Thermal Plant Deluge, Coal Conveyor HVWS & Yard Hydrants' },
      { label: 'Executive Leadership', value: 'Supervised directly by Er. Kishan Kumar Yadav (Owner & CEO)' }
    ],
    standards: ['IS 13039 / IS 15105', 'TAC Certified Standards', 'State Industrial Directorate'],
    keyHighlight: 'Turnkey manpower mobilized with in-house equipment, eliminating third-party subcontracts and ensuring premium build quality.',
    description: 'Turnkey field execution crew of O P Engineering assembled at the plant security gate with emergency fire tender vehicle in standby. Demonstrates our established capability to mobilize heavy manpower, specialized equipment, and certified supervisory leadership for major public sector power stations and refineries.'
  },
  {
    id: 'team-turnkey-crew-gate',
    title: 'Meet The Team: Heavy Piping & Fabrication Specialists',
    category: 'Team on Site',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.41__1__3a693816.jpeg',
    location: 'Plant Security Gate Entrance · Field Operations Wing',
    scopeSummary: 'Dedicated in-house fabrication and erection crew deployed on turnkey fire protection contracts.',
    specs: [
      { label: 'Craft Skills', value: 'Certified High-Pressure Pipe Welders, Fitters & Gas Cutters' },
      { label: 'Industry Track Record', value: 'Average 10+ Years On-Site at NTPC, BHEL & UPRVUNL Sites' },
      { label: 'Equipment Deployed', value: 'Mobile Arc Welding Machines, Bevel Rigs & Hydrotest Pumps' },
      { label: 'Project Wing', value: 'Directly Supported by O P Engineering Central Engineering Base' }
    ],
    standards: ['ASME Section IX Certified', 'IS 2825 / IS 1239', 'ISO 9001:2015 Compliant'],
    keyHighlight: 'Permanent in-house technical personnel ensuring reliable, on-time commissioning of safety-critical fire systems.',
    description: 'Field installation and pipeline erection squad photographed at the industrial complex gate. O P Engineering maintains a dedicated, permanent roster of certified welders and technicians to guarantee technical precision and client satisfaction across every project.'
  }
];

export const OnSiteGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = [
    'All',
    'Safety & TBT',
    'Team on Site',
    'Pump House',
    'Conveyor & Risers',
    'Deluge & Valves',
    'Yard Piping',
    'Logistics',
    'Emergency Standby'
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? ON_SITE_PHOTOS
    : ON_SITE_PHOTOS.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
      setZoomLevel(1);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
      setZoomLevel(1);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="on-site-glance" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Field Execution · Estd. 1990</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase leading-tight">
              A Glance of Our On-Site Engineering
            </h2>
            <div className="h-1.5 w-24 bg-amber-400 mt-2 mb-4 rounded-full" />
            
            <p className="text-base sm:text-lg text-slate-700 font-body leading-relaxed">
              Authentic on-site photographs from our industrial project sites across India. From heavy pump house manifold headers and high-elevation coal conveyor deluge piping to underground ring mains and emergency tender standby.
            </p>
          </div>

          {/* Quick Stats / Verification Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs shrink-0 lg:max-w-xs w-full">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Genuine Project Works</span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Every photo depicts actual field operations commissioned under direct supervision of <strong className="text-slate-900">Er. Kishan Kumar Yadav</strong> (Owner & CEO).
            </p>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Zero CGI or Stock Assets</span>
              <span className="font-bold text-red-600">Verified Quality</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-pill, clean enterprise styling) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? ON_SITE_PHOTOS.length 
              : ON_SITE_PHOTOS.filter(p => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded text-xs font-mono font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Responsive Grid (2 cols sm, 3 cols lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                className="group bg-white rounded-xl border border-slate-200 hover:border-red-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Container with Hover Overlay & Quick Zoom */}
                <div 
                  className="relative aspect-4/3 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => openLightbox(index)}
                  title="Click to inspect high-resolution photograph"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-slate-900/90 text-white text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-white/10 backdrop-blur-xs">
                      {photo.category}
                    </span>
                    <span className="bg-red-600/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      <span>On-Site</span>
                    </span>
                  </div>

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-slate-900/85 text-white text-xs font-mono font-bold px-3.5 py-2 rounded-lg border border-white/20 shadow-xl flex items-center gap-2 backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Inspect High-Res & Specs</span>
                    </div>
                  </div>

                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <p className="text-xs font-mono text-amber-300 font-bold flex items-center gap-1.5">
                      <HardHat className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{photo.location}</span>
                    </p>
                  </div>
                </div>

                {/* Card Content & Engineering Specs */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading leading-snug group-hover:text-red-600 transition-colors mb-2">
                      {photo.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {photo.scopeSummary}
                    </p>

                    {/* Technical Specification Snippets */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1.5 mb-4 text-xs">
                      {photo.specs.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex items-start justify-between gap-2 text-[11px]">
                          <span className="text-slate-500 font-mono shrink-0">{s.label}:</span>
                          <span className="text-slate-900 font-semibold text-right truncate">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Standard Compliance Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {photo.standards.map((std, i) => (
                        <span 
                          key={i}
                          className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-medium"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => openLightbox(index)}
                      className="text-xs font-bold text-slate-800 hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-red-600" />
                      <span>Full Screen View</span>
                    </button>

                    <a
                      href={`https://wa.me/918507302636?text=${encodeURIComponent(`Hello Er. Kishan Kumar Yadav, I am inquiring about the ${photo.title} (${photo.location}) seen in your on-site gallery.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded transition-colors"
                      title="Direct WhatsApp Inquiry regarding this specific work"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-600" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-heading">
                Need Site Verification or a Joint Inspection Survey?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Our executive engineering team conducts physical site surveys for thermal power plants, industrial factories, and high-hazard facilities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="tel:+918507302636"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono rounded-lg transition-colors shadow-xs"
            >
              Call Er. Kishan: +91 8507302636
            </a>
            <a
              href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20we%20require%20an%20on-site%20fire%20protection%20survey%20for%20our%20facility."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Er. Kishan</span>
            </a>
          </div>
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL WITH ZOOM & DETAILED ENGINEERING BRIEF */}
      {lightboxIndex !== null && activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Top Control Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold font-heading text-white truncate max-w-xs sm:max-w-md">
                  {activePhoto.title}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Photo {lightboxIndex + 1} of {filteredPhotos.length} · {activePhoto.category}
                </span>
              </div>
            </div>

            {/* Controls Right */}
            <div className="flex items-center gap-2">
              {/* Zoom Buttons */}
              <div className="hidden sm:flex items-center bg-slate-800 rounded border border-slate-700 p-0.5">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.5))}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono px-2 text-amber-400 font-bold">
                  {zoomLevel}x
                </span>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.5))}
                  disabled={zoomLevel >= 2.5}
                  className="p-1.5 text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 text-slate-400 hover:text-white cursor-pointer ml-1"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2 rounded bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700 ml-2"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area: Large Image Left + Engineering Details Sidebar Right */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
            
            {/* Center Image Canvas */}
            <div className="flex-1 relative flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-black/60">
              {/* Previous Image Button */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 transition-all cursor-pointer shadow-xl hover:scale-110"
                title="Previous Photo (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Image Button */}
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 transition-all cursor-pointer shadow-xl hover:scale-110"
                title="Next Photo (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Display with Smooth Pan / Zoom */}
              <div className="max-w-full max-h-[82vh] overflow-auto flex items-center justify-center no-scrollbar">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-2xl transition-transform duration-200 select-none cursor-grab active:cursor-grabbing"
                />
              </div>

              {/* Mobile Quick Zoom Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded text-[11px] font-mono text-slate-300 border border-slate-700 pointer-events-none sm:hidden">
                Swipe or use buttons to navigate
              </div>
            </div>

            {/* Right Engineering Narrative Sidebar */}
            <div className="w-full lg:w-96 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 p-6 overflow-y-auto text-slate-200 flex flex-col justify-between shrink-0 max-h-[40vh] lg:max-h-full">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    Authentic Site Record
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading leading-tight">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{activePhoto.location}</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                  {activePhoto.description}
                </div>

                {/* Key Technical Highlight */}
                <div className="p-3 bg-red-950/40 rounded-lg border border-red-900/50 text-xs text-red-200">
                  <div className="flex items-center gap-1.5 font-bold text-red-400 font-mono text-[11px] mb-1 uppercase">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Key Field Engineering</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    {activePhoto.keyHighlight}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technical Specifications
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {activePhoto.specs.map((s, idx) => (
                      <div key={idx} className="bg-slate-800/50 p-2 rounded border border-slate-800 flex flex-col text-[11px]">
                        <span className="text-slate-400 font-mono text-[10px]">{s.label}</span>
                        <span className="text-white font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Standard Codes */}
                <div>
                  <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Governing Safety Standards
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activePhoto.standards.map((std, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call-to-Action with Er. Kishan Kumar Yadav */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
                <a
                  href={`https://wa.me/918507302636?text=${encodeURIComponent(`Hello Er. Kishan Kumar Yadav, I am reviewing your on-site photo: ${activePhoto.title} (${activePhoto.location}) and would like to discuss a similar project scope.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss this with Er. Kishan</span>
                </a>

                <div className="text-[10px] font-mono text-center text-slate-400">
                  Head Office Siwan · Branch Anpara · GSTIN: 10AAFFO4977M1ZX
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="bg-slate-950 border-t border-slate-800 p-2 sm:p-3 overflow-x-auto no-scrollbar shrink-0">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
              {filteredPhotos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setZoomLevel(1);
                  }}
                  className={`relative w-14 h-10 sm:w-18 sm:h-12 rounded overflow-hidden shrink-0 transition-all border-2 cursor-pointer ${
                    lightboxIndex === idx
                      ? 'border-red-500 scale-105 shadow-md shadow-red-900/50'
                      : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500'
                  }`}
                  title={p.title}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
