'use client';

import { JSX } from 'react';
import { LayoutGroup } from 'framer-motion';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingActionBar from '@/components/ui/FloatingActionBar';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

/**
 * Home page of the portfolio.
 *
 * Contains all main sections (Hero, About, Experience, Projects, Contact),
 * along with the header, floating navigation bar and scroll-to-top button.
 *
 * @returns {JSX.Element} The rendered homepage.
 */
export default function Home(): JSX.Element {
  return (
    <LayoutGroup>
      <main className="relative z-10 min-h-screen w-full font-sans text-foreground scroll-smooth pb-28">
        <Header />
        <Hero />
        <SectionWrapper variant="fadeUp">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper variant="fadeLeft">
          <ExperienceSection />
        </SectionWrapper>
        <SectionWrapper variant="fadeRight">
          <ProjectsSection />
        </SectionWrapper>
        <SectionWrapper variant="scaleIn">
          <ContactSection />
        </SectionWrapper>
        <Footer />
        <FloatingActionBar />
        <ScrollToTopButton />
      </main>
    </LayoutGroup>
  );
}
