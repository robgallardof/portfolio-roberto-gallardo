'use client';

import Hero from '@/components/sections/Hero';
import Header from '@/components/sections/Header';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen w-full font-sans bg-background text-foreground">
      <Header />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
