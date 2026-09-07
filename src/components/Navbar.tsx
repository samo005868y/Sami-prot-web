import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Mail, Phone, ExternalLink, HardHat, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfileImage } from '../context/ProfileImageContext';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { profileImage } = useProfileImage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [navImgError, setNavImgError] = useState(false);

  useEffect(() => {
    setNavImgError(false);
  }, [profileImage]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/98 backdrop-blur-md shadow-lg shadow-slate-950/20 border-b-4 border-orange-600'
          : 'bg-slate-900 backdrop-blur-sm border-b-4 border-orange-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <a
            href="#hero"
            id="nav-brand-link"
            className="group flex items-center space-x-3 text-white focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 shadow-sm shrink-0 bg-slate-800 flex items-center justify-center">
              {!navImgError ? (
                <img
                  src={profileImage}
                  alt="Mohaiminul Haque Sami"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={() => setNavImgError(true)}
                />
              ) : (
                <span className="font-bold text-orange-400 text-sm font-mono">MHS</span>
              )}
            </div>
            <div>
              <span className="block font-heading text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                MOHAIMINUL HAQUE SAMI
              </span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Civil & Structural Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors relative ${
                    isActive
                      ? 'text-orange-400 bg-slate-800/90 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Download CV & Contact */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenCvModal}
              id="nav-cv-button"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              id="nav-quick-email"
              title="Send Email"
              className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenCvModal}
              id="nav-mobile-cv-btn"
              className="sm:inline-flex hidden items-center space-x-1.5 px-3 py-1.5 rounded bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-slate-900 border-b-2 border-orange-600 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-1 mb-3 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  className={`px-3 py-2 text-xs uppercase tracking-wider rounded font-medium transition-colors ${
                    isActive
                      ? 'text-orange-400 bg-slate-800 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              id="mobile-cv-action-btn"
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded bg-orange-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-500 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs uppercase tracking-wider hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Sami</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
