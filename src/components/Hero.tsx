import React, { useRef, useState } from 'react';
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
  CheckCircle2,
  Upload,
  Camera,
  RotateCcw
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { profileImage, isCustom, uploadPhoto, resetPhoto } = useProfileImage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [profileImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        await uploadPhoto(file);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setIsUploading(true);
      try {
        await uploadPhoto(file);
      } finally {
        setIsUploading(false);
      }
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200 blueprint-bg"
    >
      {/* Subtle Coordinate Lines & Technical Crosshairs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 text-[10px] font-mono text-slate-400">
          GRID: E-23°52'N / ELEV: +18.40m
        </div>
        <div className="absolute bottom-8 right-12 text-[10px] font-mono text-slate-400">
          DATUM: PWD STANDARD BENCHMARK
        </div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-64 h-64 border border-slate-300 rounded-full" />
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-80 h-80 border border-dashed border-orange-400/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Discipline Chip */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              <span>CIVIL & STRUCTURAL ENGINEERING</span>
              <span className="text-orange-300">|</span>
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

                {/* Visual Architectural Profile Portrait with Drag-and-Drop & Upload */}
                <div
                  className={`relative rounded overflow-hidden border ${
                    isDragging ? 'border-orange-500 ring-2 ring-orange-400' : 'border-slate-200'
                  } bg-slate-900 aspect-[4/3] group transition-all`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  {!imgError ? (
                    <img
                      src={profileImage}
                      alt="Mohaiminul Haque Sami - Civil Engineering Professional Portrait"
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 cursor-pointer hover:bg-slate-850 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-orange-600/20 border border-orange-500 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                        <Camera className="w-7 h-7" />
                      </div>
                      <p className="text-white font-heading font-bold text-base">
                        Click to Upload Original Photo
                      </p>
                      <p className="text-slate-400 text-xs font-mono mt-1 max-w-xs">
                        Select your WhatsApp photo directly from your device. No AI face generation or alteration.
                      </p>
                      <span className="mt-3 px-3 py-1.5 rounded bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs shadow-md">
                        Browse Photo File
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Technical Overlay Tags */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-orange-600 text-white font-bold text-[10px] font-mono uppercase tracking-wider">
                        {isCustom ? 'ORIGINAL PHOTO ACTIVE' : 'VERIFIED PROFILE'}
                      </span>
                      <p className="text-sm font-bold text-white mt-1 font-heading">
                        Mohaiminul Haque Sami
                      </p>
                      <p className="text-[11px] text-slate-200 font-mono">
                        Civil Engineering Student | Aspiring Structural Engineer
                      </p>
                    </div>
                  </div>

                  {/* Top Crosshairs / Location */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-orange-400 font-bold pointer-events-none">
                    DHAKA, BANGLADESH
                  </div>

                  {/* Overlay Upload Button on Hover/Mobile */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="px-2.5 py-1.5 rounded bg-white/95 hover:bg-white text-slate-800 text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-md border border-slate-200 hover:border-orange-400 transition-colors"
                      title="Upload your original WhatsApp/phone photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-orange-600" />
                      <span>{isUploading ? 'Uploading...' : 'Upload Original Photo'}</span>
                    </button>
                    {isCustom && (
                      <button
                        type="button"
                        onClick={resetPhoto}
                        className="p-1.5 rounded bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white text-[10px] font-mono border border-slate-700 transition-colors"
                        title="Reset to default image"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Hidden input for genuine photo file selection */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* Quick Hint / Action bar */}
                <div className="mt-2.5 px-3 py-2 rounded-lg bg-orange-50/80 border border-orange-200 flex items-center justify-between text-[11px] font-mono text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>Click <strong>Upload Original Photo</strong> to use your real photo directly</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-orange-700 font-bold underline hover:text-orange-800 shrink-0 ml-2"
                  >
                    Select file
                  </button>
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
