import React from 'react';
import {
  Building,
  ExternalLink,
  ShieldCheck,
  IdCard,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { memberships } from '../data/portfolioData';

export const Memberships: React.FC = () => {
  return (
    <section id="memberships" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Building className="w-4 h-4" />
              <span>Section 09 // Professional Affiliations</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Memberships
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            GLOBAL & NATIONAL CIVIL ENGINEERING INSTITUTIONS
          </p>
        </div>

        {/* Memberships Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memberships.map((m) => (
            <div
              key={m.id}
              className="rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 font-semibold">
                    {m.membershipType}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 text-[11px] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                    Verified ID
                  </span>
                </div>

                {/* Organization Name */}
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {m.organization}
                </h3>

                {/* Member ID Box */}
                <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono text-xs space-y-1 shadow-2xs">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                    Registered Member Identification
                  </span>
                  <div className="flex items-center space-x-2 text-orange-600 font-bold tracking-wider">
                    <IdCard className="w-4 h-4 text-slate-400" />
                    <span>ID: {m.memberId}</span>
                  </div>
                </div>

              </div>

              {/* Official Link */}
              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Official Portal</span>
                <a
                  href={m.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-slate-700 hover:text-orange-600 font-semibold hover:underline"
                >
                  <span>{m.website.replace('https://', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
