export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: string;
  standards: string[];
  keyDeliverables: string[];
  equipmentList: string[];
  idealFor: string;
}

export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  location: string;
  state: string;
  sector: 'Power' | 'Oil & Gas' | 'Steel & Mining' | 'Judiciary & Public';
  scopeOfWork: string;
  highlight: string;
  logoUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  phone?: string;
}

export interface CoverageSector {
  id: string;
  title: string;
  description: string;
  challenges: string;
  recommendedSystems: string[];
}

export const COMPANY_INFO = {
  name: "O P Engineering",
  legalName: "O P Engineering",
  tagline: "Specialist for Fire Fighting Solutions",
  establishedYear: 1990,
  experienceYears: "34+",
  gstin: "10AAFFO4977M1ZX",
  email: "kishany473@gmail.com",
  contacts: [
    {
      name: "Gorakhnath Yadav",
      designation: "Founder & Owner",
      phone: "+91 9472243274",
      phoneRaw: "+919472243274",
      role: "Key Operations & Executive Leadership"
    },
    {
      name: "Er. Kishan Kumar Yadav",
      designation: "Owner & CEO",
      phone: "+91 8507302636",
      phoneRaw: "+918507302636",
      role: "Executive Direction & Turnkey Quality Assurance",
      image: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.44.00_ca2cc7ba.jpeg"
    }
  ],
  phones: ["+91 9472243274", "+91 8507302636"],
  offices: {
    head: {
      type: "Head Office",
      address: "Balua Bazar, Guthani",
      district: "District - Siwan",
      state: "Bihar - 841435",
      landmark: "Near Main Market"
    },
    branch: {
      type: "Branch Office",
      address: "Near Kashi More, Anpara",
      district: "Sonbhadra",
      state: "Uttar Pradesh - 231225",
      landmark: "Power Plant Industrial Belt"
    }
  },
  philosophy: "Unmatched dedication, lifecycle consultation, avoiding turmoil and confusion during a crisis to give peace of mind."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "pumping-mechanical",
    title: "Pumping & Mechanical Works",
    shortDesc: "Complete turnkey fire pump houses engineered with electrical, diesel, and jockey pumps, automated control panels, and header manifolds.",
    category: "Pumping & Hydraulics",
    iconName: "Flame",
    standards: ["IS 15301", "NFPA 20", "NBC 2016 Part 4", "TAC Guidelines"],
    keyDeliverables: [
      "Diesel engine-driven standby fire pumps with dual battery starter systems",
      "Main electrical motor-driven centrifugal fire pump installations",
      "Automated Jockey pumps for pressurized network maintenance",
      "Microprocessor & PLC automated fire pump control panels with soft starters",
      "Full range of sluice, wafer check, butterfly, and non-return pressure valves",
      "Priming tanks, suction manifolds, test headers, and vibration isolators"
    ],
    equipmentList: [
      "Horizontal split-case centrifugal pumps (1620 / 2280 / 2850 LPM)",
      "Multi-stage high-head Jockey pumps (180 LPM)",
      "Cast Steel / Ductile Iron OS&Y Gate Valves",
      "Dual plate wafer check valves & air release valves",
      "FRLS motor control center (MCC) panels"
    ],
    idealFor: "Power plants, industrial factories, high-rise buildings, petrochemical terminals, and large warehouses."
  },
  {
    id: "hydrant-sprinkler",
    title: "Hydrant & Sprinkler Networks",
    shortDesc: "High-pressure external yard hydrants, internal wet & dry risers, automatic sprinkler arrays, and fire brigade inlet manifolds.",
    category: "Water Suppression",
    iconName: "ShieldAlert",
    standards: ["IS 3844", "IS 15105", "NFPA 13", "IS 13039"],
    keyDeliverables: [
      "Heavy-duty class 'C' ERW/Seamless MS pipeline underground & overhead networks",
      "Wet riser and dry riser vertical distribution piping with air release valves",
      "Automatic sprinkler grids (Pendant, Upright, Sidewall & Concealed glass bulb)",
      "Sprinkler Alarm Check Valves (ACV) equipped with hydraulic water motor gongs",
      "Fabricated Fire Hose Cabinets with instantaneous gunmetal landing valves",
      "2-Way and 4-Way heavy-duty Fire Brigade Inlets (FBI) & breeching connections"
    ],
    equipmentList: [
      "UL/FM listed quick-response sprinkler heads (68°C / 79°C rating)",
      "Gunmetal oblique landing valves (63mm instantaneous type)",
      "Non-percolating flexible canvas & reinforced rubber delivery hoses",
      "Double outlet fire hydrant posts & fog/jet branch pipes",
      "Grooved mechanical fittings & welded flanged joints"
    ],
    idealFor: "Commercial malls, multiplexes, logistics parks, manufacturing shop floors, and institutional campuses."
  },
  {
    id: "advanced-suppression",
    title: "Advanced Suppression Systems",
    shortDesc: "Clean agent total flooding (NOVEC 1230 / FM-200), high-pressure CO₂ systems, and comprehensive fire extinguisher deployment.",
    category: "Specialized Gas Suppression",
    iconName: "Zap",
    standards: ["NFPA 2001", "IS 15493", "IS 15683", "NFPA 12"],
    keyDeliverables: [
      "Clean agent NOVEC 1230 & FM-200 gas flooding for zero water damage",
      "Total flooding and local application high-pressure CO₂ suppression systems",
      "Dedicated server room, data center, and electrical switchgear enclosure protection",
      "Full spectrum portable & trolley fire extinguishers (ABC Dry Powder, CO₂, Foam, Water)",
      "Automated gas release control panels with hold/abort stations and discharge nozzles"
    ],
    equipmentList: [
      "Seamless manganese steel gas cylinders with rapid discharge valves",
      "Calibrated 360° & 180° engineered discharge nozzles",
      "Gas release solenoid actuators & pneumatic pressure switches",
      "Warning sounder strobes & illuminated 'Gas Discharged' signs",
      "Clean agent pipe networks tested to withstand extreme pneumatic pressures"
    ],
    idealFor: "Server rooms, MCC electrical control rooms, transformer bays, battery banks, and critical IT infrastructure."
  },
  {
    id: "detection-alarm",
    title: "Detection & Alarm Networks",
    shortDesc: "Intelligent addressable fire alarm panels, optical & heat sensors, long-range optical beam detectors, and aspirating VESDA networks.",
    category: "Detection & Life Safety",
    iconName: "BellRing",
    standards: ["IS 2189", "NFPA 72", "EN 54", "NBC 2016"],
    keyDeliverables: [
      "Microprocessor-based addressable & conventional Fire Alarm Control Panels (FACP)",
      "Multi-sensor optical photoelectric smoke and rate-of-rise heat detectors",
      "VESDA (Very Early Warning Aspirating Smoke Detection) laser air-sampling systems",
      "Long-range reflective optical beam smoke detectors for expansive atrium volumes",
      "Dual-action break-glass and resettable Manual Call Points (MCP)",
      "Synchronized electronic hooters with high-intensity xenon/LED flashing strobes"
    ],
    equipmentList: [
      "Loop-powered intelligent smoke & heat detector heads with isolator bases",
      "VESDA laser chamber aspirating pipe network with precision sampling holes",
      "High-output electronic sounders (100 dB+ at 1 meter)",
      "Dual-redundant battery backup power management units",
      "2-core shielded twisted pair 1.5 sq mm fire-survival FRLS cabling"
    ],
    idealFor: "High-bay warehouses, hospital intensive units, auditorium atriums, office towers, and public buildings."
  },
  {
    id: "consulting-supervision",
    title: "Consulting & Project Supervision",
    shortDesc: "End-to-end fire risk assessments, hydraulic pipeline calculations, statutory NOC clearance assistance, and commissioning hydro-tests.",
    category: "Engineering & Compliance",
    iconName: "ClipboardCheck",
    standards: ["NBC 2016 Part 4", "State Fire Service Rules", "NFPA Codes", "OISD Norms"],
    keyDeliverables: [
      "Fire risk assessment and comprehensive threat/vulnerability plant audits",
      "Detailed hydraulic network calculations, pump head sizing, and isometric drafting",
      "Statutory Fire Department NOC documentation, liaison, and compliance certification",
      "Hydrostatic pressure testing of installed piping networks (up to 15 kg/cm²)",
      "Comprehensive pre-commissioning testing, handover documentation, and staff drills",
      "Structured Annual Maintenance Contracts (AMC) for complete lifecycle peace of mind"
    ],
    equipmentList: [
      "Calibrated hydrostatic pressure test pumps & digital pressure gauges",
      "Ultrasonic flowmeters & pitot tube flow measuring equipment",
      "Smoke detector aerosol aerosol testing tools and heat gun calibrators",
      "Sound level meters for alarm audibility verification",
      "Detailed QA/QC inspection dossiers and as-built drawings"
    ],
    idealFor: "New constructions, expansion projects, industrial plants undergoing safety revamps, and statutory renewals."
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  state: string;
  sector: 'Thermal Power' | 'Heavy Engineering' | 'Oil & Gas' | 'Steel & Mining' | 'Judiciary & Public';
  year: string;
  scope: string;
  systemsInstalled: string[];
  pumpCapacity: string;
  testPressure: string;
  status: 'Commissioned & Verified' | 'Operational & AMC';
  keyImpact: string;
}

export const COMPLETED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-ntpc-barh",
    title: "NTPC Barh Super Thermal Power Station (3×660 MW)",
    client: "NTPC Limited",
    location: "Barh",
    state: "Bihar",
    sector: "Thermal Power",
    year: "Turnkey Commissioned",
    scope: "Heavy mechanical fire pump house erection with 3× 2850 LPM centrifugal pumps, automated Star-Delta MCC panels, transformer high-velocity water spray (HVWS) deluge network, and underground yard hydrant loop.",
    systemsInstalled: ["Centrifugal Fire Pump House", "Transformer Deluge HVWS", "Yard Hydrant Ring Mains", "Dual Battery Starter Panels"],
    pumpCapacity: "2850 LPM × 3 Arrays",
    testPressure: "15.0 kg/cm² Hydro-Tested",
    status: "Commissioned & Verified",
    keyImpact: "Ensuring round-the-clock fire safety for one of Eastern India's largest critical power generation nodes."
  },
  {
    id: "proj-bhel-nagarnar",
    title: "BHEL Nagarnar Power & Turbine Protection Project",
    client: "Bharat Heavy Electricals Ltd. (BHEL)",
    location: "Nagarnar",
    state: "Chhattisgarh",
    sector: "Heavy Engineering",
    year: "Turnkey Commissioned",
    scope: "Heavy industrial piping, deluge valve stations for turbine generator bays, priming systems, air release valves, and structural mechanical integration for national engineering PSU.",
    systemsInstalled: ["Turbine Deluge Spray", "High-Pressure Piping", "Hydraulic Alarm Check Valves", "Suction Manifold Assemblies"],
    pumpCapacity: "2850 LPM Split-Case",
    testPressure: "14.5 kg/cm² Sustained Hold",
    status: "Commissioned & Verified",
    keyImpact: "Critical turbine generator life-safety protection meeting strict central PSU specifications."
  },
  {
    id: "proj-uprvunl-anpara",
    title: "UPRVUNL Anpara Thermal Power Station (2630 MW)",
    client: "UP Rajya Vidyut Utpadan Nigam Ltd.",
    location: "Anpara, Sonbhadra",
    state: "Uttar Pradesh",
    sector: "Thermal Power",
    year: "Multi-Year AMC & Retrofit",
    scope: "High-speed water deluge spray across coal conveyor galleries, boiler structure wet riser distribution, yard hydrant post maintenance, and continuous preventive health checks.",
    systemsInstalled: ["Coal Handling Deluge", "Boiler Wet Risers", "Yard Hydrant Network", "Comprehensive AMC Servicing"],
    pumpCapacity: "2850 LPM Electric + Diesel Standby",
    testPressure: "15.0 kg/cm² Hold Tested",
    status: "Operational & AMC",
    keyImpact: "Safeguarding critical coal handling transit against spontaneous combustion hazards."
  },
  {
    id: "proj-hmel-bhatinda",
    title: "HMEL Guru Gobind Singh Petroleum Refinery",
    client: "HPCL-Mittal Energy Limited (HMEL)",
    location: "Bhatinda",
    state: "Punjab",
    sector: "Oil & Gas",
    year: "Commissioned",
    scope: "Refinery-grade class 'C' ERW heavy steel pipeline laying, foam water suppression manifolds for hydrocarbon storage units, and rigorous radiographic weld inspections.",
    systemsInstalled: ["Foam Deluge Manifold", "High-Volume Fire Monitors", "Ring Hydrant Mainlines", "Class C Heavy ERW Piping"],
    pumpCapacity: "5700 LPM High-Flow",
    testPressure: "15.0 kg/cm² Tested (OISD Standards)",
    status: "Commissioned & Verified",
    keyImpact: "Complete compliance with strict Oil Industry Safety Directorate (OISD-116) regulations."
  },
  {
    id: "proj-iocl-barauni",
    title: "IOCL Barauni Petroleum Refinery Safety Upgrades",
    client: "Indian Oil Corporation Ltd. (IOCL)",
    location: "Barauni",
    state: "Bihar",
    sector: "Oil & Gas",
    year: "Commissioned",
    scope: "Hydrocarbon processing area fire hydrant network laying, remote monitor stations, and clean agent gas flooding systems for central electrical control and SCADA rooms.",
    systemsInstalled: ["NOVEC 1230 Clean Agent", "Industrial Yard Hydrants", "Quick-Acting Deluge", "FRLS Control Cabling"],
    pumpCapacity: "2850 LPM Multi-Stage",
    testPressure: "15.0 kg/cm² Tested",
    status: "Commissioned & Verified",
    keyImpact: "Zero water damage protection for high-value refinery instrumentation and automation server bays."
  },
  {
    id: "proj-lucknow-high-court",
    title: "Lucknow High Court Judicial Complex",
    client: "State Judicial Works Department",
    location: "Lucknow",
    state: "Uttar Pradesh",
    sector: "Judiciary & Public",
    year: "Commissioned",
    scope: "Multi-tier institutional life-safety infrastructure across expansive courtrooms, judicial chambers, and public atriums with automated sprinkler grids and VESDA air sampling.",
    systemsInstalled: ["Automatic Sprinkler System", "Multi-Zone Addressable FACP", "VESDA Laser Smoke Detection", "Emergency Fire Brigade Inlets"],
    pumpCapacity: "2280 LPM Dual Pump House",
    testPressure: "12.0 kg/cm² Hydro-Tested",
    status: "Commissioned & Verified",
    keyImpact: "State-of-the-art public life protection and municipal fire service NOC compliance."
  },
  {
    id: "proj-nmdc-nagarnar",
    title: "NMDC Nagarnar Integrated Steel Plant (3 MTPA)",
    client: "National Mineral Development Corp. (NMDC)",
    location: "Nagarnar",
    state: "Chhattisgarh",
    sector: "Steel & Mining",
    year: "Commissioned",
    scope: "High-volume blast furnace area water spray networks, automated pump house controls, heavy diameter ductile iron and MS piping, and complete commissioning tests.",
    systemsInstalled: ["Blast Furnace Water Spray", "Automated Pump House Panels", "Yard Hydrant Ring Loop", "Heavy Flanged Valves"],
    pumpCapacity: "5700 LPM Combined Flow",
    testPressure: "15.0 kg/cm² Certified",
    status: "Commissioned & Verified",
    keyImpact: "Industrial-grade protection across high-temperature molten metal and rolling mills."
  }
];

export const CLIENTS: ClientItem[] = [
  {
    id: "ntpc",
    name: "NTPC Limited",
    shortName: "NTPC",
    location: "Barh (Bihar) & Jharali (Haryana)",
    state: "National PSU",
    sector: "Power",
    scopeOfWork: "Super Thermal Power Station turnkey pump houses, transformer deluge HVWS arrays, and yard hydrant ring networks.",
    highlight: "India's largest power conglomerate PSU partner",
    logoUrl: "/assets/clients/ntpc.svg"
  },
  {
    id: "bhel",
    name: "Bharat Heavy Electricals Limited",
    shortName: "BHEL",
    location: "Nagarnar Plant",
    state: "Central PSU",
    sector: "Power",
    scopeOfWork: "Heavy mechanical piping, automated deluge valves, priming systems, and high-pressure turbine room life protection.",
    highlight: "Premier sovereign heavy electrical manufacturer",
    logoUrl: "/assets/clients/bhel.svg"
  },
  {
    id: "uprvunl",
    name: "UPRVUNL (Anpara Thermal Power)",
    shortName: "UPRVUNL",
    location: "Anpara, Sonbhadra",
    state: "Uttar Pradesh",
    sector: "Power",
    scopeOfWork: "2630 MW thermal power station boiler wet risers, coal handling deluge systems, and long-term preventive AMC.",
    highlight: "Critical state energy generation security partner",
    logoUrl: "/assets/clients/uprvunl.svg"
  },
  {
    id: "hmel",
    name: "HPCL-Mittal Energy Limited (HMEL)",
    shortName: "HMEL",
    location: "Guru Gobind Singh Refinery, Bhatinda",
    state: "Punjab",
    sector: "Oil & Gas",
    scopeOfWork: "Refinery-grade fire hydrant line laying, foam suppression manifold, and strict OISD compliance certification.",
    highlight: "High-hazard hydrocarbon energy joint venture",
    logoUrl: "/assets/clients/hmel.jpg"
  },
  {
    id: "iocl",
    name: "Indian Oil Corporation Ltd. (IOCL)",
    shortName: "IOCL",
    location: "Barauni Petroleum Refinery",
    state: "Bihar",
    sector: "Oil & Gas",
    scopeOfWork: "Hydrocarbon processing area yard hydrant networks, foam monitors, and clean agent server room gas flooding.",
    highlight: "Maharatna national oil & petrochemical PSU",
    logoUrl: "/assets/clients/iocl.svg"
  },
  {
    id: "lucknow-high-court",
    name: "Lucknow High Court Judicial Complex",
    shortName: "High Court",
    location: "New High Court Campus, Lucknow",
    state: "Uttar Pradesh",
    sector: "Judiciary & Public",
    scopeOfWork: "Public judicial complex automatic sprinkler networks, multi-sensor addressable smoke detection & emergency risers.",
    highlight: "High-density landmark state judiciary infrastructure",
    logoUrl: "/assets/clients/high_court.svg"
  },
  {
    id: "nmdc",
    name: "National Mineral Development Corp. (NMDC)",
    shortName: "NMDC",
    location: "Nagarnar Integrated Steel Plant",
    state: "Chhattisgarh",
    sector: "Steel & Mining",
    scopeOfWork: "Blast furnace high-velocity water spray deluge, heavy fire pump house automation, and ring hydrant mains.",
    highlight: "Navratna mining & integrated steel producer",
    logoUrl: "/assets/clients/nmdc.jpg"
  }
];

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  phone?: string;
  image?: string;
  secondaryImage?: string;
  isOwnerAndCeo?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Er. Kishan Kumar Yadav",
    role: "Owner & CEO",
    experience: "Executive Leadership & Quality Systems",
    specialization: "Turnkey Fire Infrastructure, Clean Agent Suppression & PSU Client Strategy",
    bio: "Spearheads O P Engineering's executive direction, strategic PSU partnerships, and quality assurance protocols across India. Directly oversees large-scale turnkey fire protection networks, clean agent installations (NOVEC/CO₂), statutory NOC clearances, and client relations for critical infrastructure.",
    phone: "+91 8507302636",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.44.00_ca2cc7ba.jpeg",
    secondaryImage: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_19.36.34_f04a6c37.jpeg",
    isOwnerAndCeo: true
  },
  {
    name: "Gorakhnath Yadav",
    role: "Founder & Owner",
    experience: "34+ Years Engineering Experience (Estd. 1990)",
    specialization: "Project Leadership, Turnkey Hydraulic Engineering & PSU Strategy",
    bio: "Founded O P Engineering in 1990 with the mandate to deliver uncompromised fire safety for India's high-hazard industrial and government infrastructure. Led turnkey execution across super thermal power plants, steel mills, and judicial complexes across multiple states.",
    phone: "+91 9472243274"
  }
];

export const COVERAGE_SECTORS: CoverageSector[] = [
  {
    id: "industrial-psu",
    title: "Industrial Plants & PSUs",
    description: "Thermal power stations, steel rolling mills, refineries, and chemical processing facilities requiring extreme-reliability suppression.",
    challenges: "High combustible fuel loads, electrical transformer hazards, and continuous operations where shutdowns are cost-prohibitive.",
    recommendedSystems: ["High-Volume Deluge Spray", "Diesel Fire Pump House", "Yard Hydrant Ring Mains", "Linear Heat Detection"]
  },
  {
    id: "commercial-malls",
    title: "Malls, Multiplexes & Retail",
    description: "Large-footprint retail hubs, multi-screen cinemas, hypermarkets, and high-density commercial complexes.",
    challenges: "High human footfall, rapid evacuation requirements, complex interior layouts, and strict municipal fire NOC rules.",
    recommendedSystems: ["Automatic Quick-Response Sprinklers", "Wet Riser Cabinets", "Intelligent Voice Evacuation", "Beam Detectors"]
  },
  {
    id: "hospitals-institutions",
    title: "Hospitals & Healthcare Facilities",
    description: "Multi-specialty hospitals, medical colleges, laboratories, and elderly care facilities.",
    challenges: "Non-ambulatory patients unable to self-evacuate; requirement for zero false alarms and non-toxic extinguishing agents in OT/ICU.",
    recommendedSystems: ["VESDA Air Sampling", "Clean Agent NOVEC 1230", "Zoned Addressable Smoke Alarms", "Fire Doors & Dampers"]
  },
  {
    id: "warehouses-logistics",
    title: "Warehouses & Logistics Parks",
    description: "High-bay pallet racking facilities, e-commerce fulfillment centers, and bulk storage sheds.",
    challenges: "Extreme ceiling heights up to 14m, fast-spreading vertical fire drafts between packed pallets, and water pressure loss.",
    recommendedSystems: ["ESFR Early Suppression Fast Response Sprinklers", "Long-Range Optical Beam Alarms", "External Yard Hydrants"]
  },
  {
    id: "residential-highrise",
    title: "Residential Towers & Complexes",
    description: "Multi-storey apartment towers, gated housing societies, and mixed-use residential quarters.",
    challenges: "Vertical escape routes, shared service shafts, parking basement fire hazards, and resident safety awareness.",
    recommendedSystems: ["Wet Risers with Hose Reels", "Basement Deluge/Sprinklers", "Underground Static Reservoir", "Emergency Fire Brigade Inlets"]
  },
  {
    id: "legacy-modernization",
    title: "Legacy Modernization & Retrofitting",
    description: "Upgrading aging, corroded, or non-compliant fire infrastructure in older public and commercial premises.",
    challenges: "Outdated piping, lack of documentation, failing pumps, and pressure leaks during municipal audit inspections.",
    recommendedSystems: ["Hydro-Testing & Pipe Replacement", "Automatic Control Panel Retrofit", "AMC Preventive Servicing", "NOC Clearance Audits"]
  }
];
