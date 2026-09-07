import React from 'react';
import { HardHat, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

export const Footer: React.FC = () => {
  const { profileImage } = useProfileImage();
  const [footerImgError, setFooterImgError] = React.useState(false);

  React.useEffect(() => {
    setFooterImgError(false);
  }, [profileImage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden blueprint-bg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Identity column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 shadow-2xs shrink-0 bg-slate-100 flex items-center justify-center">
                {!footerImgError ? (
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={() => setFooterImgError(true)}
                  />
                ) : (
                  <HardHat className="w-5 h-5 text-orange-600" />
                )}
              </div>
              <span className="font-heading text-xl font-extrabold text-slate-900 tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-sm font-mono text-orange-600 font-semibold">
              {personalInfo.primaryTitle}
            </p>

            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              Professional civil engineering portfolio presenting practical field supervision, precision surveying, structural analysis, and construction management.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-orange-600 uppercase tracking-wider block font-bold">
              Quick Links
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-orange-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-2 space-y-3 flex flex-col md:items-end">
            <span className="text-xs font-mono text-orange-600 uppercase tracking-wider block font-bold">
              Connect
            </span>
            
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-2xs"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Mohaiminul Haque Sami. All rights reserved.</p>
          <div className="flex items-center space-x-3 text-slate-500">
            <span>Uttara 1230, Dhaka</span>
            <span>•</span>
            <span>Civil Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
