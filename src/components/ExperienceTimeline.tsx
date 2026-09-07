import React from 'react';
import {
  Briefcase,
  Building2,
  Calendar,
  ExternalLink,
  CheckCircle2,
  HardHat,
  Ruler,
  Compass,
  FileCheck
} from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Section 02 // Field & Industrial Experience</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            PUBLIC SECTOR & STRUCTURAL CONSTRUCTION SUPERVISION
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 sm:p-8 shadow-sm transition-all relative overflow-hidden"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-orange-600" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Experience Info (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded text-xs font-mono font-bold bg-orange-50 text-orange-700 border border-orange-200">
                      {exp.tag} • {exp.duration}
                    </span>

                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-orange-600" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 tracking-wide">
                      {exp.role}
                    </h3>
                    
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      <span className="font-bold text-orange-600 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.organization}
                      </span>
                      <span className="text-slate-300">•</span>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-slate-600 hover:text-orange-600 font-mono text-xs hover:underline"
                      >
                        <span>pwd.gov.bd</span>
                        <ExternalLink className="w-3 h-3 text-orange-600" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {exp.description}
                  </p>

                  {/* Practical Experience Checklist */}
                  <div className="space-y-3">
                    <h4 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-orange-600" />
                      Practical Experience Included:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.practicalExperience.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Construction / Site-Engineering Visual (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-lg overflow-hidden bg-slate-50 border border-slate-200 p-3 shadow-inner">
                    <div className="text-[10px] font-mono text-slate-500 pb-2 flex items-center justify-between border-b border-slate-200">
                      <span>SITE EXECUTION RECORD</span>
                      <span className="text-orange-600 font-bold">PWD DIVISION</span>
                    </div>

                    <div className="relative rounded overflow-hidden aspect-[4/3] mt-2 group border border-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                        alt="Public Works Department (PWD) Building Construction Site Supervision"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-center bg-slate-900/90 text-white py-1.5 px-2 rounded text-[10px] font-mono">
                        Structural Supervision & Quality Control
                      </div>
                    </div>

                    <div className="mt-3 space-y-2 text-[11px] font-mono text-slate-700">
                      <div className="flex justify-between border-b border-slate-200 pb-1">
                        <span className="text-slate-500">Supervision Scope</span>
                        <span className="text-slate-900 font-semibold">Reinforced Concrete & Earthwork</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-1">
                        <span className="text-slate-500">Quality Spec</span>
                        <span className="text-orange-600 font-bold">PWD Standard Specifications</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Methodology</span>
                        <span className="text-slate-900 font-semibold">Testing, Surveying & Drawings</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-900 flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Focus on compliance with government engineering specifications & safety protocols.</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
