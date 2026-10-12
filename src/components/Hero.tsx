import React, { useState } from 'react';
import {
  FileDown,
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  Compass,
  Building,
  Ruler,
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { profileImage } = useProfileImage();
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [profileImage]);
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200 blueprint-bg"
    >
      {/* Soft Ambient Minimalist Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status & Discipline Chip */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span className="text-slate-600">DHAKA, BANGLADESH</span>
            </div>

            {/* Name */}
            <div>
              <h1
                id="hero-name"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase leading-tight"
              >
                MOHAIMINUL <br />
                <span className="text-orange-600">
                  HAQUE SAMI
                </span>
              </h1>

              {/* Primary Professional Title */}
              <p
                id="hero-title"
                className="mt-3 text-lg sm:text-xl font-bold text-slate-700 flex items-center gap-2 font-mono"
              >
                <Compass className="w-5 h-5 text-orange-600 shrink-0" />
                <span>{personalInfo.primaryTitle}</span>
              </p>
            </div>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.summary}
            </p>

            {/* Key Field Competencies Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-700">
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Construction Supervision
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Field Surveying & Total Station
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Structural Work & Layout
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Quantity Estimation & BOQ
              </span>
            </div>

            {/* Prominent CTA Buttons */}
            <div className="pt-3 flex flex-wrap gap-3 sm:gap-4 items-center">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                id="hero-cta-skills"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
              >
                <span>Explore My Skills</span>
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-slate-900 text-white hover:bg-orange-600 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenCvModal}
                id="hero-cta-download-cv"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-white hover:bg-orange-50 border-2 border-orange-600 text-orange-700 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-orange-600" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social / Direct Contact Icons */}
            <div className="pt-4 border-t border-slate-200 flex items-center space-x-6 text-slate-600">
              <span className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-500">
                Direct Channels:
              </span>
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                className="hover:text-orange-600 transition-colors flex items-center space-x-1.5 text-xs font-mono font-medium"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-orange-600" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-social-email"
                className="hover:text-orange-600 transition-colors flex items-center space-x-1.5 text-xs font-mono font-medium"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-orange-600" />
                <span className="hidden sm:inline">Email</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                id="hero-social-phone"
                className="hover:text-orange-600 transition-colors flex items-center space-x-1.5 text-xs font-mono font-medium"
                title="Phone Call"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span className="hidden sm:inline">{personalInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Engineering Visual Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Engineering Blueprint Card */}
              <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-md relative overflow-hidden">
                {/* Top Blueprint Ruler */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Ruler className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold text-slate-700">SPEC // CIVIL & STRUCTURAL PROFILE</span>
                  </div>
                  <span className="text-orange-600 font-bold">MHS-2026</span>
                </div>

                {/* Visual Architectural Profile Portrait Frame */}
                <div className="relative rounded overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3] group transition-all shadow-inner">
                  <img
                    src="/assets/images/Profile-Main.jpeg"
                    alt="Mohaiminul Haque Sami - Civil Engineering Professional Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/image/Profile-Main.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Technical Overlay Tags */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-orange-600 text-white font-bold text-[10px] font-mono uppercase tracking-wider">
                        PORTFOLIO PROFILE
                      </span>
                      <p className="text-[11px] text-slate-200 font-mono mt-1">
                        Civil Engineering Student | Aspiring Structural Engineer
                      </p>
                    </div>
                  </div>

                  {/* Top Crosshairs / Location */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-orange-400 font-bold pointer-events-none">
                    DHAKA, BANGLADESH
                  </div>
                </div>

                {/* Engineering Metrics / Structural Spec Highlights */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">CURRENT STUDY</span>
                    <span className="text-slate-900 font-bold truncate block">B.Sc. Civil Engr.</span>
                    <span className="text-orange-600 font-semibold text-[11px]">IUBAT (2025–2029)</span>
                  </div>
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">DIPLOMA RESULT</span>
                    <span className="text-slate-900 font-bold block">CGPA 3.56 / 4.00</span>
                    <span className="text-slate-600 font-semibold text-[11px]">MPI (2020–2024)</span>
                  </div>
                </div>

                {/* Location Footer Bar */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>Uttara, Dhaka, Bangladesh</span>
                  </div>
                  <span className="text-[11px] text-slate-400">DOB: 12 Dec 2005</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
