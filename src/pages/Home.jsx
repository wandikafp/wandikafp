import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <FeaturedProjects />
    </main>
  );
}
