import React from 'react';
import {
  Wrench,
  Compass,
  Target,
  Grid,
  Calculator,
  Layers,
  Building2,
  FileSpreadsheet,
  Cpu,
  Box,
  Eye,
  Map,
  Table,
  FileText,
  Presentation,
  FolderCheck,
  Palette,
  Globe,
  DraftingCompass,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-orange-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-orange-600" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-orange-600" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-orange-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-orange-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-orange-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-orange-600" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-5 h-5 text-orange-600" />;
      case 'Box':
        return <Box className="w-5 h-5 text-orange-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-orange-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-orange-600" />;
      case 'Map':
        return <Map className="w-5 h-5 text-orange-600" />;
      case 'Table':
        return <Table className="w-5 h-5 text-orange-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-orange-600" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-orange-600" />;
      case 'FolderCheck':
        return <FolderCheck className="w-5 h-5 text-orange-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-orange-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-orange-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Wrench className="w-4 h-4" />
              <span>Section 04 // Technical Competencies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical Skills
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            FIELD PRACTICES, CADD/BIM TOOLS & COMPUTATIONAL SOFTWARE
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category, idx) => {
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition-all flex flex-col h-full relative overflow-hidden group"
              >
                {/* Header Accent Line */}
                <div className="h-1.5 -mx-6 -mt-6 mb-6 bg-orange-600" />

                {/* Category Header */}
                <div className="mb-5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span>CATEGORY // 0{idx + 1}</span>
                    <span className="text-orange-600 font-bold">{category.skills.length} SKILLS</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-2.5 flex-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-orange-50/30 transition-all flex items-center space-x-3.5 group/item"
                    >
                      <div className="p-2 rounded bg-white border border-slate-200 shrink-0 shadow-2xs">
                        {getIcon(skill.iconName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-xs sm:text-sm text-slate-800 group-hover/item:text-orange-600 transition-colors block truncate">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer Note */}
                <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Standard Verified</span>
                  <span className="text-slate-800 font-semibold">Practically Applied</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
