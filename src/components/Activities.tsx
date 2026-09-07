import React from 'react';
import {
  Users2,
  Calendar,
  Building,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  Compass
} from 'lucide-react';
import { activities } from '../data/portfolioData';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-slate-50 text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Users2 className="w-4 h-4" />
              <span>Section 08 // Leadership & Campus Engagement</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Extra-Curricular Activities
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            CLUB LEADERSHIP, STRUCTURAL WORKSHOPS & TEAM ADVOCACY
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div
              key={act.id}
              className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Year & Badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 font-semibold">
                    Role // {act.role}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>{act.period}</span>
                  </div>
                </div>

                {/* Organization */}
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {act.organization}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {act.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Engagement 0{idx + 1}</span>
                <span className="text-slate-700 font-semibold flex items-center gap-0.5 group-hover:text-orange-600 transition-colors">
                  Leadership
                  <ChevronRight className="w-3 h-3 text-orange-600" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
