import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Flag,
  User,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ShieldCheck,
  HardHat
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

interface AboutProps {
  onOpenGalleryProfile?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGalleryProfile }) => {
  const { profileImage } = useProfileImage();
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [profileImage]);
  return (
    <section id="about" className="py-20 bg-white text-slate-800 relative border-b border-slate-200 blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>Section 01 // Professional Profile</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Mohaiminul Haque Sami
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-mono text-slate-500 uppercase">
            DISCIPLINE: CIVIL & STRUCTURAL ENGINEERING
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Photo Placeholder & Identity Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Engineer Profile Placeholder Frame */}
            <div className="relative rounded-xl bg-slate-50 border border-slate-200 p-4 shadow-sm overflow-hidden group">
              
              {/* Technical Calibration Marks */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pb-2 mb-2 border-b border-slate-200">
                <span>PORTRAIT // ARCHIVAL RECORD</span>
                <span className="text-orange-600 font-bold">ID: SAMI-CE-05</span>
              </div>

              {/* Photo Area */}
              <div className="relative rounded overflow-hidden bg-slate-900 aspect-[4/5] border border-slate-200">
                <img
                  src={profileImage || '/assets/images/Profile.jpeg'}
                  alt="Mohaiminul Haque Sami - Civil Engineering Professional Profile"
                  className="w-full h-full object-cover object-top opacity-95 group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/Profile.jpeg';
                  }}
                />
                
                {/* Verified Profile Badge */}
                <div className="absolute top-3 left-3 right-3 bg-white/95 backdrop-blur border border-emerald-300 rounded px-3 py-2 text-[11px] font-mono text-slate-800 flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Engineer Profile
                  </span>
                  <span className="text-[10px] text-slate-600 font-semibold">IUBAT • MPI</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <div>
                    <p className="font-heading text-lg font-bold text-white tracking-wide">
                      {personalInfo.name}
                    </p>
                    <p className="text-xs font-mono text-orange-400 font-medium">
                      {personalInfo.primaryTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Status Note */}
              <div className="mt-3 px-3 py-2.5 rounded bg-white border border-slate-200 text-[11px] text-slate-700 font-mono shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-orange-600 font-bold block">Mohaiminul Haque Sami</span>
                  <span className="text-[10px] text-slate-500">Dhaka, Bangladesh • Civil & Structural Engineering</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                  ACTIVE PROFILE
                </span>
              </div>
            </div>

            {/* Personal Particulars Card */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-3 font-mono text-xs shadow-sm">
              <h3 className="font-heading text-sm font-bold text-orange-600 tracking-wider uppercase border-b border-slate-200 pb-2">
                Personal Particulars
              </h3>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-slate-500 block text-[10px]">DATE OF BIRTH</span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-semibold mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{personalInfo.dateOfBirth}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px]">NATIONALITY</span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-semibold mt-0.5">
                    <Flag className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{personalInfo.nationality}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px]">GENDER</span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-semibold mt-0.5">
                    <User className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{personalInfo.gender}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block text-[10px]">RESIDENTIAL BASE</span>
                  <div className="flex items-center gap-1.5 text-slate-900 font-semibold mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span className="truncate" title={personalInfo.location}>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1.5 text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] text-slate-600">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-[11px] text-slate-800 hover:text-orange-600 font-semibold">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-[11px] text-slate-800 hover:text-orange-600 font-semibold truncate">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={personalInfo.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] text-orange-600 hover:text-orange-700 font-semibold truncate">
                    {personalInfo.linkedIn}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Biography, Academic Fields & Practical Exposure */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Biography Narrative */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-black text-slate-900">
                Dedicated Civil Engineering Student with Rigorous Field Practice
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-base">
                Mohaiminul Haque Sami is a Civil Engineering student at the International University of Business Agriculture and Technology (IUBAT) and a diploma graduate in Civil Engineering from Mymensingh Polytechnic Institute (MPI). He combines sound theoretical comprehension of structural mechanics with hands-on, on-site construction experience.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Throughout his academic tenure and industrial training with the Public Works Department (PWD) and residential building projects, Sami has actively applied civil engineering principles to real-world infrastructure challenges—focusing on structural integrity, precision surveying, material testing, and quality control.
              </p>
            </div>

            {/* Practical Exposure Section */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center space-x-2">
                  <HardHat className="w-5 h-5 text-orange-600" />
                  <h4 className="font-heading text-lg font-bold text-slate-900">
                    Practical On-Site Exposure
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">FIELD VERIFIED</span>
              </div>

              <p className="text-sm text-slate-600">
                Sami has hands-on practical exposure across critical phases of building construction and field operations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {personalInfo.practicalHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2.5 p-2.5 rounded bg-white border border-slate-200 text-xs text-slate-800 shadow-2xs font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Fields & Interests */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-600" />
                  Academic Fields & Engineering Interests
                </h4>
                <span className="text-xs font-mono font-bold text-slate-500">8 CORE DOMAINS</span>
              </div>

              <p className="text-sm text-slate-600">
                Specialized coursework and technical domains forming Sami’s engineering foundation:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {personalInfo.academicFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-slate-50 border border-slate-200 hover:border-orange-500 transition-colors flex flex-col justify-between shadow-2xs group"
                  >
                    <span className="text-[10px] font-mono text-orange-600 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-800 mt-2 font-heading leading-tight group-hover:text-orange-600 transition-colors">
                      {field}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
