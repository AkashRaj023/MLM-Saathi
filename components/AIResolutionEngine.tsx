import React, { useState } from 'react';
import { 
  Brain, 
  Zap,
  CheckCircle2,
  AlertCircle,
  Clock,
  ChevronRight,
  Shield,
  Activity,
  ArrowRight,
  Terminal,
  Play,
  UserCheck,
  Cpu
} from 'lucide-react';

const AIResolutionEngine: React.FC = () => {
  const [selectedResolution, setSelectedResolution] = useState(0);

  const activeResolutions = [
    { id: 'RES-99B', module: 'Revenue Impact', incident: 'INC-2281', confidence: '94%', status: 'PENDING_APPROVAL', time: '2m ago' },
    { id: 'RES-99A', module: 'API Health', incident: 'INC-2279', confidence: '88%', status: 'EXECUTING', time: '5m ago' },
    { id: 'RES-98F', module: 'Partner Map', incident: 'INC-2275', confidence: '92%', status: 'COMPLETED', time: '14m ago' },
  ];

  const traceSteps = [
    { id: 1, title: 'Input Collection', desc: 'Analyzing Kafka trace logs for Partner UPI Node', status: 'completed' },
    { id: 2, title: 'Pattern Recognition', desc: 'Detected PII-leakage fingerprint in metadata headers', status: 'completed' },
    { id: 3, title: 'Impact Calculation', desc: 'Estimated revenue at risk: ₹14.2 Lakhs / Hour', status: 'completed' },
    { id: 4, title: 'Root Cause Attribution', desc: 'Identified misconfigured Nginx proxy on Vendor side', status: 'completed' },
    { id: 5, title: 'Proposed Remediation', desc: 'Enable Circuit Breaker & Failover to Ecosystem AA', status: 'active' },
    { id: 6, title: 'Action Execution', desc: 'Awaiting Administrator Approval', status: 'pending' },
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Active Resolutions Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[#E2E8F0] flex justify-between items-center bg-gray-50/50">
               <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#8B9BB4]">Active AI Actions</h3>
               <span className="bg-amber-50 text-amber-500 border border-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-[4px]">3 ACTIONS PENDING</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/30 border-b border-[#E2E8F0]">
                  <th className="px-4 h-[44px] text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">ID</th>
                  <th className="px-4 h-[44px] text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Module</th>
                  <th className="px-4 h-[44px] text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Incident</th>
                  <th className="px-4 h-[44px] text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest text-center">Confidence</th>
                  <th className="px-4 h-[44px] text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Status</th>
                  <th className="px-4 h-[44px]"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {activeResolutions.map((res, i) => (
                  <tr 
                    key={res.id} 
                    onClick={() => setSelectedResolution(i)}
                    className={`h-[44px] cursor-pointer transition-colors ${i % 2 === 1 ? 'bg-[#F8F9FB]' : 'bg-white'} ${selectedResolution === i ? 'bg-blue-50/30' : 'hover:bg-gray-50'}`}
                  >
                    <td className="px-4 text-[13px] font-bold text-[#0A1628]">{res.id}</td>
                    <td className="px-4 text-[13px] font-medium text-[#8B9BB4]">{res.module}</td>
                    <td className="px-4 text-[13px] font-medium text-[#00B4D8]">{res.incident}</td>
                    <td className="px-4 text-center">
                       <span className="text-[13px] font-bold text-[#0A1628] font-mono">{res.confidence}</span>
                    </td>
                    <td className="px-4">
                       <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest ${
                         res.status === 'PENDING_APPROVAL' ? 'bg-amber-50 text-amber-500 border border-amber-100' :
                         res.status === 'EXECUTING' ? 'bg-blue-50 text-blue-500 border border-blue-100' :
                         'bg-green-50 text-green-500 border border-green-100'
                       }`}>
                         {res.status.replace('_', ' ')}
                       </span>
                    </td>
                    <td className="px-4 text-right">
                       <ChevronRight size={16} className={`transition-transform ${selectedResolution === i ? 'translate-x-1 text-[#00B4D8]' : 'text-[#8B9BB4]'}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white rounded-lg p-5 h-[160px] border border-[#E2E8F0] flex flex-col justify-between">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-green-50 text-green-500 rounded-lg"><CheckCircle2 size={16} /></div>
                   <p className="text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Auto-Resolved (24H)</p>
                </div>
                <div>
                   <p className="text-[24px] font-bold text-[#0A1628] tracking-tight">142 Cases</p>
                   <div className="mt-1 flex items-center gap-2 text-[11px] font-bold text-green-500 uppercase">
                       <ArrowRight size={12} className="-rotate-45" /> 24% Efficiency Gain
                   </div>
                </div>
             </div>
             <div className="bg-white rounded-lg p-5 h-[160px] border border-[#E2E8F0] flex flex-col justify-between">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-[#F0F9FF] text-[#00B4D8] rounded-lg"><Clock size={16} /></div>
                   <p className="text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Mean Time to Action</p>
                </div>
                <div>
                   <p className="text-[24px] font-bold text-[#0A1628] tracking-tight">18.4 Seconds</p>
                   <div className="mt-1 text-[11px] font-bold text-[#00B4D8] uppercase">
                       942m Response Delta Saved
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Remediation Trace View */}
        <div className="space-y-4">
          <div className="bg-[#0A1628] rounded-xl p-6 text-white min-h-[500px] flex flex-col shadow-xl">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#00B4D8] mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
               <Terminal size={14} />
               Trace: {activeResolutions[selectedResolution].id}
            </h3>
            
            <div className="flex-1 space-y-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-white/10" />

                {traceSteps.map((step) => (
                   <div key={step.id} className="flex gap-4 relative">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                        step.status === 'completed' ? 'bg-[#00B4D8]' :
                        step.status === 'active' ? 'bg-amber-500 animate-pulse' :
                        'bg-white/5'
                      }`}>
                         {step.status === 'completed' ? <CheckCircle2 size={12} className="text-white" /> : <div className="w-1 h-1 rounded-full bg-white/20" />}
                      </div>
                      <div className="space-y-1">
                         <p className={`text-[12px] font-bold tracking-tight ${
                           step.status === 'completed' ? 'text-white' :
                           step.status === 'active' ? 'text-amber-500' :
                           'text-[#8B9BB4]'
                         }`}>{step.title}</p>
                         <p className="text-[11px] font-medium text-[#8B9BB4] leading-relaxed line-clamp-1">{step.desc}</p>
                      </div>
                   </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <UserCheck size={16} className="text-amber-500" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-500">Manual Approval</span>
                   </div>
                   <Play size={12} className="text-amber-500" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                   <button className="h-[36px] bg-white/5 hover:bg-white/10 rounded-[6px] text-[11px] font-bold uppercase tracking-widest text-white transition-all">Deny</button>
                   <button className="h-[36px] bg-[#00B4D8] hover:bg-[#0096b4] rounded-[6px] text-[11px] font-bold uppercase tracking-widest text-white transition-all">Execute</button>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-[#E2E8F0] shadow-sm">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#F1F5F9] rounded-lg text-[#0A1628]"><Cpu size={16} /></div>
                <h4 className="text-[11px] font-bold text-[#8B9BB4] uppercase tracking-widest">Model Config</h4>
             </div>
             <div className="space-y-3">
                <div className="flex justify-between items-center">
                   <span className="text-[11px] font-medium text-[#8B9BB4] uppercase">Version</span>
                   <span className="text-[11px] font-bold text-[#0A1628]">Conduit-v2.1-AA</span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-[11px] font-medium text-[#8B9BB4] uppercase">Precision</span>
                   <span className="text-[11px] font-bold text-green-500">0.94</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResolutionEngine;
