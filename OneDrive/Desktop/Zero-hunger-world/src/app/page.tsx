import React from 'react';
import LandingNavbar from '@/components/landing/LandingNavbar';
import Hero from '@/components/landing/Hero';
import AboutUs from '@/components/landing/AboutUs';

import Testimonials from '@/components/landing/Testimonials';

import ImpactAnalytics from '@/components/landing/ImpactAnalytics';
import AcademyTeaser from '@/components/landing/AcademyTeaser';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      <LandingNavbar />

      <Hero />
      <AboutUs />

      <ImpactAnalytics />

      <Testimonials />
      <AcademyTeaser />
      <Contact />

      <Footer />
    </main>
  );
}
