import React, { useState, useEffect } from 'react';
import {
  FileDown,
  X,
  Printer,
  Compass,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  ExternalLink,
  Award,
  IdCard,
  Layers
} from 'lucide-react';
import {
  personalInfo,
  educationList,
  workExperience,
  skillCategories,
  certifications,
  projects,
  activities,
  memberships,
  languages,
  references
} from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { profileImage } = useProfileImage();
  const [cvImgError, setCvImgError] = useState(false);

  useEffect(() => {
    setCvImgError(false);
  }, [profileImage]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-6 text-left print:border-none print:shadow-none print:bg-white print:text-black print:max-w-none print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden in Print) */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold">
            <FileDown className="w-4 h-4" />
            <span>Curriculum Vitae Preview // Mohaiminul Haque Sami</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-mono font-bold transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative Guidance Tip for Sami (Hidden in Print) */}
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-2.5 text-[11px] font-mono text-orange-900 flex items-center justify-between print:hidden">
          <span>
            Tip for Sami: You can place your actual compiled PDF file into <code className="text-orange-950 font-bold">public/cv.pdf</code> to enable one-click direct static download.
          </span>
          <a
            href="/cv.pdf"
            download="Mohaiminul_Haque_Sami_CV.pdf"
            className="text-orange-600 hover:underline font-bold ml-3 shrink-0"
          >
            Direct link check
          </a>
        </div>

        {/* Resume Printable Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-white text-slate-800 print:max-h-none print:overflow-visible print:bg-white print:text-black print:p-8 space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-200 print:border-black/20 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border-2 border-slate-200 print:border-black shrink-0 shadow-2xs bg-slate-100 flex items-center justify-center">
                  {!cvImgError ? (
                    <img
                      src={profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setCvImgError(true)}
                    />
                  ) : (
                    <span className="font-heading font-extrabold text-slate-700 text-lg">MHS</span>
                  )}
                </div>
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 print:text-black tracking-tight">
                    {personalInfo.name.toUpperCase()}
                  </h1>
                  <p className="font-mono text-xs sm:text-sm text-orange-600 print:text-amber-800 mt-1 font-bold">
                    {personalInfo.primaryTitle}
                  </p>
                  <p className="text-xs text-slate-600 print:text-gray-600 mt-2 max-w-xl leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>
              </div>

              {/* Contact meta */}
              <div className="text-xs font-mono space-y-1 text-slate-700 print:text-gray-800 shrink-0 sm:text-right">
                <p className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-orange-600 print:text-black" />
                  {personalInfo.location}
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3 h-3 text-orange-600 print:text-black" />
                  {personalInfo.phone}
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3 h-3 text-orange-600 print:text-black" />
                  {personalInfo.email}
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Linkedin className="w-3 h-3 text-orange-600 print:text-black" />
                  {personalInfo.linkedIn}
                </p>
                <p className="text-slate-400 print:text-gray-500 text-[10px]">
                  DOB: {personalInfo.dateOfBirth} | {personalInfo.nationality} | {personalInfo.gender}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="font-heading text-lg font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 print:text-black text-sm">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-slate-500 print:text-gray-600 text-xs">{edu.duration}</span>
                  </div>
                  <div className="flex justify-between text-orange-700 print:text-gray-800 font-mono font-medium">
                    <span>{edu.institution}, {edu.location}</span>
                    {edu.cgpa && <span className="font-bold text-slate-900 print:text-black">CGPA: {edu.cgpa}</span>}
                  </div>
                  <div className="text-[11px] text-slate-500 print:text-gray-600 font-mono">
                    EQF Level {edu.eqfLevel} | {edu.educationLevel} | {edu.credits}
                  </div>
                  <div className="text-[11px] text-slate-600 print:text-gray-700">
                    Fields: {edu.fieldsOfStudy.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="font-heading text-lg font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {workExperience.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 print:text-black text-sm">
                    <span>{exp.role}</span>
                    <span className="font-mono text-slate-500 print:text-gray-600 text-xs">{exp.period}</span>
                  </div>
                  <div className="text-orange-700 print:text-gray-800 font-mono font-medium">
                    {exp.organization} ({exp.website.replace('https://', '')})
                  </div>
                  <p className="text-slate-600 print:text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-500 print:text-gray-600 pl-1">
                    {exp.practicalExperience.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="font-heading text-lg font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              Projects & Site Practice
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-1">
                <div className="flex justify-between items-baseline font-bold text-slate-900 print:text-black text-sm">
                  <span>{proj.title}</span>
                  <span className="font-mono text-slate-500 print:text-gray-600 text-xs">{proj.duration}</span>
                </div>
                <div className="text-orange-700 print:text-gray-800 font-mono font-medium">
                  Role: {proj.role} | Location: {proj.location}
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 print:text-gray-700 pl-1">
                  {proj.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs">
              {skillCategories.map((cat, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                  <span className="font-mono font-bold text-slate-900 print:text-black w-48 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-slate-600 print:text-gray-700">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              Licenses & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-2.5 rounded bg-slate-50 border border-slate-200 print:bg-gray-100 print:text-black">
                  <span className="font-bold text-slate-900 print:text-black block">{c.title}</span>
                  {c.levels && <span className="text-orange-700 print:text-gray-700 text-[11px] block font-medium">{c.levels}</span>}
                  <span className="text-slate-500 print:text-gray-600 text-[11px] block">{c.issuingOrg} ({c.website.replace('https://', '')})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="font-heading text-base font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
                Memberships
              </h2>
              <div className="space-y-1 text-xs text-slate-700 print:text-gray-800">
                {memberships.map((m) => (
                  <div key={m.id}>
                    <span className="font-bold text-slate-900 print:text-black">{m.organization}</span> — {m.membershipType} (ID: {m.memberId})
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-heading text-base font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
                Languages
              </h2>
              <div className="space-y-1 text-xs text-slate-700 print:text-gray-800">
                {languages.map((l, i) => (
                  <div key={i}>
                    <span className="font-bold text-slate-900 print:text-black">{l.language}</span>: {l.type}{' '}
                    {l.understanding && `(Understanding: ${l.understanding}, Speaking: ${l.speaking}, Writing: ${l.writing})`}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-2 pt-2">
            <h2 className="font-heading text-base font-bold text-orange-600 print:text-black uppercase tracking-wider border-b border-slate-200 print:border-black/20 pb-1">
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 print:text-gray-800">
              {references.map((ref) => (
                <div key={ref.id} className="p-2.5 rounded bg-slate-50 border border-slate-200 print:bg-gray-100">
                  <span className="font-bold text-slate-900 print:text-black block">{ref.name}</span>
                  <span className="text-[11px] text-slate-600 print:text-gray-600 block">{ref.position}</span>
                  <span className="text-[11px] text-slate-600 print:text-gray-600 block">{ref.organization} {ref.subOrganization && `(${ref.subOrganization})`}</span>
                  <span className="text-[11px] font-mono text-orange-600 font-semibold print:text-gray-700 block mt-1">{ref.phone} • {ref.email}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs font-mono transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
