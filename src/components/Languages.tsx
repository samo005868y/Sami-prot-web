import React from 'react';
import { Languages as LanguagesIcon, CheckCircle2, Globe2 } from 'lucide-react';
import { languages } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 bg-slate-50 text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-1">
              <LanguagesIcon className="w-4 h-4" />
              <span>Section 10 // Language Competencies</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Language Skills
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500 uppercase mt-1 md:mt-0">
            CEFR STANDARD EVALUATION (NO CONVERSION TO ARBITRARY PERCENTAGES)
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-bold font-mono">
                    {lang.language.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {lang.language}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {lang.type}
                    </span>
                  </div>
                </div>

                {lang.language === 'Bengali' ? (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-50 text-orange-700 border border-orange-200 font-semibold">
                    Native Proficiency
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-50 text-orange-700 border border-orange-200 font-semibold">
                    Professional Working CEFR
                  </span>
                )}
              </div>

              {/* CEFR Breakdown for English */}
              {lang.understanding && (
                <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block mb-1 font-semibold">UNDERSTANDING</span>
                    <span className="font-bold text-orange-600 text-sm block">
                      {lang.understanding}
                    </span>
                    <span className="text-[10px] text-slate-600">Listening / Reading</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block mb-1 font-semibold">SPEAKING</span>
                    <span className="font-bold text-orange-600 text-sm block">
                      {lang.speaking}
                    </span>
                    <span className="text-[10px] text-slate-600">Spoken Interaction</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block mb-1 font-semibold">WRITING</span>
                    <span className="font-bold text-orange-600 text-sm block">
                      {lang.writing}
                    </span>
                    <span className="text-[10px] text-slate-600">Technical Reporting</span>
                  </div>
                </div>
              )}

              {lang.language === 'Bengali' && (
                <p className="text-xs text-slate-700 leading-relaxed font-mono bg-slate-50 p-3 rounded-lg border border-slate-200">
                  Full natural command of Bengali as native language across technical site communication, regional labor coordination, and formal administrative discourse.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
