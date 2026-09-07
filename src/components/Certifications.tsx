import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  FileCheck2,
  Building,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Section 05 // Formal Accreditations</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Licenses & Certifications
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            TECHNICAL BOARD, UNIVERSITY & NATIONAL AUTHORITY CREDENTIALS
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Meta Line */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3 border-b border-slate-200 pb-2">
                  <span className="text-orange-600 font-bold">{cert.category}</span>
                  <span className="flex items-center gap-1 text-slate-600 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Level Tag if applicable */}
                {cert.levels && (
                  <div className="mt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono font-semibold">
                      Accreditation: {cert.levels}
                    </span>
                  </div>
                )}

                {/* Sub-items if applicable */}
                {cert.items && (
                  <div className="mt-3 space-y-1.5 pl-1">
                    {cert.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-slate-700 font-mono font-medium"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Organization and Link Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">ISSUING AUTHORITY</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-orange-600" />
                    {cert.issuingOrg}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={cert.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-orange-600 font-mono text-xs transition-colors shadow-2xs"
                  >
                    <span>{cert.website.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3 text-orange-600" />
                  </a>
                </div>
              </div>

              {/* Future Certificate Image/PDF placeholder notice */}
              <div className="mt-3 pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-200">
                <span>Certificate PDF / Scan attachment ready</span>
                <span className="text-slate-500">ID: {cert.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
