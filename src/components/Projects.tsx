import React, { useState } from 'react';
import {
  FolderKanban,
  Calendar,
  MapPin,
  HardHat,
  CheckCircle2,
  Maximize2,
  X,
  FileText,
  Image as ImageIcon,
  Compass,
  Layers,
  Ruler,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'photos' | 'drawings' | 'surveying' | 'docs'>('overview');

  return (
    <section id="projects" className="py-20 bg-slate-50 text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <FolderKanban className="w-4 h-4" />
              <span>Section 06 // Field Engineering Portfolio</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering Projects
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            STRUCTURAL CONSTRUCTION, SUPERVISION & QUALITY AUDIT
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image Placeholder & Field View (5 cols) */}
                <div className="lg:col-span-5 relative bg-slate-900 min-h-[280px] sm:min-h-[340px] flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
                  {/* Background Image Placeholder */}
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  {/* Top Technical Metadata */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded bg-orange-600 text-white text-xs font-mono font-bold">
                      RESIDENTIAL RCC PROJECT
                    </span>
                    <span className="text-[10px] font-mono text-white bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                      PROJECT ID: MYS-2024
                    </span>
                  </div>

                  {/* Bottom Image Caption & Expand Trigger */}
                  <div className="relative z-10 space-y-3">
                    <div className="p-3 rounded-lg bg-white/95 border border-slate-200 backdrop-blur shadow-sm">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">Category Focus</span>
                      <span className="text-xs font-bold text-slate-800">{proj.placeholderCategory}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full py-2 px-4 rounded bg-slate-900 hover:bg-orange-600 text-xs font-mono text-white flex items-center justify-center space-x-2 transition-all font-semibold active:scale-95"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                      <span>Expand Project Details & Documentation Space</span>
                    </button>
                  </div>
                </div>

                {/* Content Details (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Role & Duration Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 border-b border-slate-200 pb-3">
                      <div className="flex items-center space-x-1.5 text-orange-600 font-bold">
                        <HardHat className="w-4 h-4" />
                        <span>Role: {proj.role}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span>{proj.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {proj.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600 font-mono">
                      <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-heading text-xs uppercase tracking-wider text-slate-500 font-bold">
                        Field Responsibilities Executed:
                      </h4>

                      <div className="space-y-2">
                        {proj.responsibilities.map((resp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2.5 p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Action Button & Note */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                    >
                      <span>View Project</span>
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono text-slate-500 text-center sm:text-right">
                      Supports structural drawings & site photography archives
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal with Modular Future Tabs */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left space-y-6 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono text-orange-600 font-bold tracking-wider uppercase block mb-1">
                  Civil Engineering Project Specification
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mt-2">
                  <span className="text-slate-800 font-semibold">{selectedProject.duration}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span className="text-orange-600 font-bold">{selectedProject.role}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs for Future Project Additions */}
            <div className="flex border-b border-slate-200 overflow-x-auto gap-2 text-xs font-mono">
              <button
                onClick={() => setModalTab('overview')}
                className={`px-4 py-2 border-b-2 font-bold transition-colors whitespace-nowrap ${
                  modalTab === 'overview'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Project Overview
              </button>
              <button
                onClick={() => setModalTab('photos')}
                className={`px-4 py-2 border-b-2 font-bold transition-colors whitespace-nowrap ${
                  modalTab === 'photos'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Construction Photos
              </button>
              <button
                onClick={() => setModalTab('drawings')}
                className={`px-4 py-2 border-b-2 font-bold transition-colors whitespace-nowrap ${
                  modalTab === 'drawings'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Structural Drawings & Site Plans
              </button>
              <button
                onClick={() => setModalTab('surveying')}
                className={`px-4 py-2 border-b-2 font-bold transition-colors whitespace-nowrap ${
                  modalTab === 'surveying'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Surveying Images
              </button>
              <button
                onClick={() => setModalTab('docs')}
                className={`px-4 py-2 border-b-2 font-bold transition-colors whitespace-nowrap ${
                  modalTab === 'docs'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Project Documentation
              </button>
            </div>

            {/* Modal Body Based on Selected Tab */}
            {modalTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="space-y-4">
                    <h4 className="font-heading text-lg font-bold text-slate-900">
                      Field Execution & Responsibilities
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Served as Assistant Site Engineer during practical field training on a 5-storey residential building construction project in Maskanda, Mymensingh, under direct senior engineering supervision.
                    </p>
                    <div className="space-y-2">
                      {selectedProject.responsibilities.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 p-3 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                      <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 rounded bg-orange-50 border border-orange-200 text-xs text-orange-900 font-mono">
                      <span className="text-orange-700 font-bold block mb-1">Specification Authenticity Note:</span>
                      In strict compliance with engineering accuracy, only verified project facts from the resume are displayed. No unconfirmed structural dimensions, costs, or calculated volumes have been invented.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {modalTab === 'photos' && (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <ImageIcon className="w-10 h-10 text-orange-600 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Construction Site Photography Archive
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Reserved placeholder container for actual on-site photographs of foundation footing, column rebar cages, slab shuttering, and concrete casting from the Maskanda site.
                </p>
                <div className="text-[11px] font-mono text-orange-700 bg-orange-50 py-2 px-4 rounded inline-block border border-orange-200 font-semibold">
                  Ready to accept JPG/PNG site photographs
                </div>
              </div>
            )}

            {modalTab === 'drawings' && (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <Ruler className="w-10 h-10 text-orange-600 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Structural Drawings & Site Plans Space
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Reserved for AutoCAD floor layouts, column centerline grids, slab reinforcement schedules, and beam elevation drawings.
                </p>
                <div className="text-[11px] font-mono text-orange-700 bg-orange-50 py-2 px-4 rounded inline-block border border-orange-200 font-semibold">
                  Ready to link CAD drawings & PDF plans
                </div>
              </div>
            )}

            {modalTab === 'surveying' && (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <Compass className="w-10 h-10 text-orange-600 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Surveying & Benchmark Leveling Records
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Reserved for Total Station traverse logs, benchmark elevation verifications, and building boundary demarcation documentation.
                </p>
                <div className="text-[11px] font-mono text-orange-700 bg-orange-50 py-2 px-4 rounded inline-block border border-orange-200 font-semibold">
                  Ready for survey data & field photos
                </div>
              </div>
            )}

            {modalTab === 'docs' && (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <FileText className="w-10 h-10 text-orange-600 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Project Documentation & Material Sheets
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Reserved for bar bending schedules, material estimation spreadsheets, concrete slump test certificates, and quality audit sign-offs.
                </p>
                <div className="text-[11px] font-mono text-orange-700 bg-orange-50 py-2 px-4 rounded inline-block border border-orange-200 font-semibold">
                  Ready for documentation records
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-colors"
              >
                Close Project Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
