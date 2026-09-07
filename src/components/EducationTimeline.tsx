import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle,
  Building,
  Layers
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Section 03 // Academic Progression</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Education
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            HIGHER EDUCATION & TECHNICAL ACCREDITATION
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:-ml-px before:bg-slate-200">
          {educationList.map((edu, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={edu.id}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-4 sm:left-1/2 -ml-3.5 sm:-ml-4.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-orange-600 text-orange-600 flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Card Wrapper */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isFirst ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                  }`}
                >
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-slate-300 transition-all space-y-4 relative overflow-hidden">
                    
                    {/* Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {edu.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-bold bg-orange-50 text-orange-700 border border-orange-200">
                          <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
                          CURRENT / ONGOING
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-orange-600" />
                          COMPLETED DIPLOMA
                        </span>
                      )}

                      <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Degree Title */}
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-orange-600 font-bold text-sm sm:text-base mt-1 flex items-center gap-1.5">
                        <Building className="w-4 h-4 shrink-0" />
                        {edu.institution}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {edu.location}
                        </span>
                        <span>•</span>
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-orange-600 inline-flex items-center gap-1 hover:underline"
                        >
                          <span>{edu.website.replace('https://', '')}</span>
                          <ExternalLink className="w-3 h-3 text-orange-600" />
                        </a>
                      </div>
                    </div>

                    {/* Visual CGPA Highlight for MPI Diploma */}
                    {edu.cgpa && (
                      <div className="p-4 rounded-lg bg-orange-50/80 border border-orange-200 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-mono text-orange-800 font-bold uppercase tracking-wider block">
                            Academic Achievement
                          </span>
                          <span className="text-xs text-slate-600">Cumulative Grade Point Average</span>
                        </div>
                        <div className="text-right">
                          <span className="font-heading text-2xl font-black text-orange-600">
                            {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Technical Specifications Grid */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-white border border-slate-200 text-center font-mono">
                      <div>
                        <span className="text-[10px] text-slate-500 block">EQF LEVEL</span>
                        <span className="text-xs font-bold text-slate-900">Level {edu.eqfLevel}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">LEVEL</span>
                        <span className="text-xs font-bold text-slate-900">{edu.educationLevel}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">CREDITS</span>
                        <span className="text-xs font-bold text-orange-600 truncate block" title={edu.credits}>
                          {edu.credits}
                        </span>
                      </div>
                    </div>

                    {/* Fields of Study */}
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider block mb-2">
                        Key Fields of Study:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.fieldsOfStudy.map((field, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded bg-white border border-slate-200 text-xs text-slate-700 font-mono hover:border-orange-400 transition-colors shadow-2xs"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
