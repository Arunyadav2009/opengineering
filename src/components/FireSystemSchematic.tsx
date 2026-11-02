import React, { useState } from 'react';
import { Droplets, Activity, Gauge, ShieldAlert, Zap, Bell, CheckCircle2, ChevronRight } from 'lucide-react';

interface StageDetail {
  id: string;
  name: string;
  shortName: string;
  pressure: string;
  norm: string;
  icon: React.ReactNode;
  description: string;
  keyComponents: string[];
  operationalRole: string;
}

const SYSTEM_STAGES: StageDetail[] = [
  {
    id: 'pump-house',
    name: 'Fire Pump House Automation',
    shortName: '01. Pump House',
    pressure: '7.0 – 10.5 kg/cm²',
    norm: 'IS 15301 / NFPA 20',
    icon: <Activity className="w-5 h-5 text-red-500" />,
    description: 'The core pressurized muscle of the system. Triple redundancy setup comprising a main electrical centrifugal pump, an automatic diesel-engine standby pump, and an automatic Jockey pump.',
    keyComponents: [
      'Main Electrical Centrifugal Pump (2850 LPM)',
      'Standby Diesel Engine Driven Pump with dual battery start',
      'Pressurization Jockey Pump (180 LPM) for auto-pressure maintenance',
      'Microprocessor / PLC Control Panel with Star-Delta Starter',
      'Suction & Delivery Header Manifold with Air Release & Wafer Check Valves'
    ],
    operationalRole: 'Automatically activates within seconds when line pressure drops below preset threshold, providing continuous high-volume water.'
  },
  {
    id: 'hydrant-ring',
    name: 'Yard Hydrant & Wet Riser Ring',
    shortName: '02. Hydrant Network',
    pressure: '5.5 – 7.0 kg/cm² (at landing)',
    norm: 'IS 3844 / NBC Part 4',
    icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
    description: 'Underground ring mains circling the perimeter with external yard hydrants, alongside internal vertical wet risers supplying each floor.',
    keyComponents: [
      'Heavy Class C ERW / Seamless Mild Steel Pipeline Ring',
      'Gunmetal Single/Double Outlet Oblique Landing Valves (63mm)',
      'Weather-proof Fabricated Hose Boxes with Canvas Delivery Hoses',
      'First-Aid Hose Reel Drums with 30m high-pressure rubber tubing',
      '4-Way Fire Brigade Inlets (FBI) with forged check valves'
    ],
    operationalRole: 'Allows fire fighters and emergency response teams to tap into continuous pressurized water at any building level or facility perimeter.'
  },
  {
    id: 'sprinkler-grid',
    name: 'Automatic Sprinkler Network',
    shortName: '03. Sprinklers & ACV',
    pressure: '3.5 – 5.0 kg/cm²',
    norm: 'IS 15105 / NFPA 13',
    icon: <Droplets className="w-5 h-5 text-cyan-400" />,
    description: 'Precision thermal ceiling grid. When room temperature reaches 68°C, quartzoid glass bulbs shatter individually over the fire locus, triggering water and an alarm gong.',
    keyComponents: [
      'Pendant & Upright Quartzoid Bulb Sprinklers (68°C / 79°C)',
      'Sprinkler Alarm Check Valve (ACV) with mechanical water motor gong',
      'Water Flow Switches with addressable monitor modules',
      'Floor Isolation Butterfly Valves with supervisory tamper switches',
      'Inspector Test Connections (ITC) for periodic discharge verification'
    ],
    operationalRole: 'Extinguishes or contains 90% of structural fires at origin before human arrival, with minimal water footprint.'
  },
  {
    id: 'clean-agent',
    name: 'Clean Agent & Gas Suppression',
    shortName: '04. Gas Suppression',
    pressure: '25 – 42 bar (Storage)',
    norm: 'NFPA 2001 / IS 15493',
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
    description: 'Waterless fire extinguishing designed for critical electrical switchgear, server rooms, and control centers where water would destroy equipment.',
    keyComponents: [
      'NOVEC 1230 / FM-200 / CO₂ Seamless Storage Cylinders',
      'Fast-acting Solenoid & Pneumatic Discharge Actuators',
      'Calibrated 360° Discharge Nozzles with rapid vaporization',
      'Gas Release Control Panel with 30-sec pre-discharge countdown',
      'Emergency Abort Switches & Warning Sounder Strobes'
    ],
    operationalRole: 'Extinguishes electrical and chemical fires within 10 seconds through heat absorption, leaving zero residue and zero equipment downtime.'
  },
  {
    id: 'vesda-alarm',
    name: 'Intelligent Detection & VESDA',
    shortName: '05. Detection & Alarms',
    pressure: 'Low Voltage 24V DC FRLS',
    norm: 'IS 2189 / NFPA 72',
    icon: <Bell className="w-5 h-5 text-yellow-400" />,
    description: 'The sensory brain of the facility. Combines intelligent addressable optical detectors with aspirating laser air sampling (VESDA) for nascent particle detection.',
    keyComponents: [
      'Microprocessor Addressable Fire Alarm Control Panel (FACP)',
      'Multi-Criteria Photoelectric Smoke & Heat Sensors',
      'VESDA Laser Chamber Aspirating Air Sampling Pipes',
      'Long-Range Optical Beam Smoke Detectors (100m range)',
      'Dual-Action Manual Call Points (MCP) & 100dB Sounder Strobes'
    ],
    operationalRole: 'Provides up to 60 minutes of early warning during the incipient smoldering stage before visible flame or smoke breaks out.'
  }
];

export const FireSystemSchematic: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('pump-house');
  const activeStage = SYSTEM_STAGES.find((s) => s.id === activeStageId) || SYSTEM_STAGES[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 relative overflow-hidden shadow-xs">
      {/* Background industrial pattern */}
      <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
            Interactive Technical Architecture
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
            Turnkey Industrial Fire Fighting Flow
          </h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Select any subsystem to inspect operating pressures, equipment checklist, and compliance norms.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
          <Gauge className="w-4 h-4 text-red-600 shrink-0" />
          <span>Active Pressure Range: <strong className="text-slate-900">{activeStage.pressure}</strong></span>
        </div>
      </div>

      {/* Pipeline Navigation Nodes */}
      <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {SYSTEM_STAGES.map((stage, idx) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-3.5 rounded-lg border transition-all relative ${
                isActive
                  ? 'bg-red-50/70 border-red-500 shadow-sm text-slate-900'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded bg-white border border-slate-200 shadow-xs">
                  {stage.icon}
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  NODE 0{idx + 1}
                </span>
              </div>
              <p className="text-xs font-bold leading-tight line-clamp-1">{stage.shortName}</p>
              <p className="text-[11px] font-mono text-slate-500 mt-1 truncate">{stage.norm}</p>
              
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-red-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Visual Flow / Pipeline Diagram */}
      <div className="relative z-10 my-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2">
          <span>STATIC WATER RESERVOIR & INCOMING HYDRAULICS</span>
          <span className="text-red-600 font-semibold">100% TURNKEY SUPERVISED SYSTEM</span>
        </div>
        
        {/* Animated flow bar */}
        <div className="relative h-3 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-90 animate-pulse" />
          <div className="absolute inset-0 flex justify-between px-4 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-90" />
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-90" />
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-90" />
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>

        <div className="grid grid-cols-5 text-[10px] text-center font-mono text-slate-600 font-medium mt-2">
          <span>Intake</span>
          <span>Booster</span>
          <span>Distribution</span>
          <span>Total Flood</span>
          <span>Sensory / PLC</span>
        </div>
      </div>

      {/* Active Stage Detailed Breakdown */}
      <div className="relative z-10 bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="lg:w-7/12">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-red-100 text-red-700 border border-red-200">
                {activeStage.norm}
              </span>
              <span className="text-xs text-slate-600 font-mono">
                Operating Spec: {activeStage.pressure}
              </span>
            </div>
            
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {activeStage.name}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {activeStage.description}
            </p>

            <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                Operational Duty & Protection Principle:
              </span>
              <p className="text-xs text-slate-600 leading-normal">
                {activeStage.operationalRole}
              </p>
            </div>
          </div>

          <div className="lg:w-5/12 bg-white rounded-lg p-4 border border-slate-200 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3 font-mono">
              Key Equipment & Material Specifications:
            </span>
            <ul className="space-y-2">
              {activeStage.keyComponents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
