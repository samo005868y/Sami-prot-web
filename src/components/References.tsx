import React, { useState } from 'react';
import {
  UserCheck,
  Building,
  Phone,
  Mail,
  Shield,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  HardHat
} from 'lucide-react';
import { references } from '../data/portfolioData';

export const References: React.FC = () => {
  const [showReferences, setShowReferences] = useState(true);

  return (
    <section id="references" className="py-16 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Privacy Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-1">
              <UserCheck className="w-4 h-4" />
              <span>Section 11 // Professional References</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Academic & Industry References
            </h2>
          </div>

          <button
            onClick={() => setShowReferences(!showReferences)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 font-semibold transition-colors self-start sm:self-auto"
          >
            <Shield className="w-3.5 h-3.5 text-orange-600" />
            <span>{showReferences ? 'Hide Contact Info' : 'Show References'}</span>
            {showReferences ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* References Cards */}
        {showReferences ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, idx) => (
              <div
                key={ref.id}
                className="rounded-xl bg-slate-50 border border-slate-200 p-6 shadow-sm space-y-4 relative overflow-hidden group hover:border-slate-300 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                      {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <HardHat className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {ref.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-600">
                        {ref.position}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500 font-semibold">
                    Ref 0{idx + 1}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1 text-xs shadow-2xs">
                  <div className="text-slate-800 flex items-center gap-1.5 font-semibold">
                    <Building className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{ref.organization}</span>
                  </div>
                  {ref.subOrganization && (
                    <div className="text-slate-500 pl-5 text-[11px] font-mono">
                      {ref.subOrganization}
                    </div>
                  )}
                </div>

                {/* Direct Contact Actions */}
                <div className="pt-2 border-t border-slate-200 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Phone className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[11px] text-slate-800 font-medium">{ref.phone}</span>
                    </div>
                    <a
                      href={`tel:${ref.phone.split(',')[0].replace(/\s+/g, '')}`}
                      className="text-orange-600 hover:text-orange-700 hover:underline text-[10px] uppercase font-bold"
                    >
                      Direct Call
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <div className="flex items-center space-x-2 text-slate-600 truncate mr-2">
                      <Mail className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span className="text-[11px] text-slate-800 font-medium truncate">{ref.email}</span>
                    </div>
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-orange-600 hover:text-orange-700 hover:underline text-[10px] uppercase font-bold shrink-0"
                    >
                      Email
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-mono text-slate-600">
            Reference details hidden for professional privacy. Click "Show References" above to reveal supervisor & instructor contact credentials.
          </div>
        )}

      </div>
    </section>
  );
};
