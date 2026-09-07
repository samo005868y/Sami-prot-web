/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProfileImageProvider } from './context/ProfileImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationTimeline } from './components/EducationTimeline';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Activities } from './components/Activities';
import { Memberships } from './components/Memberships';
import { Languages } from './components/Languages';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <ProfileImageProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-orange-600 selection:text-white flex flex-col font-sans blueprint-bg">
        {/* Sticky Navigation */}
        <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
          <About />
          <ExperienceTimeline />
          <EducationTimeline />
          <Skills />
          <Certifications />
          <Projects />
          <Gallery />
          <Activities />
          <Memberships />
          <Languages />
          <References />
          <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* CV Modal with printable resume preview & direct download guidance */}
        <CvModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />
      </div>
    </ProfileImageProvider>
  );
}
