import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 border-b border-[var(--color-border-subtle)] sticky top-0 bg-[var(--color-bg-base)]/80 backdrop-blur-md z-50">
      <Link to="/" className="flex items-center gap-2 text-sm font-mono tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"></div>
        STATUS: ACTIVE
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">HOME</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">ABOUT</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">EXPERIENCE</a>
        <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">EDUCATION</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">SKILLS</a>
        <Link to="/projects" className={`transition-colors ${!isHome ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}>PROJECTS</Link>
      </div>
      {/* Mobile Nav Fallback */}
      <div className="md:hidden flex gap-4 text-sm font-semibold tracking-widest uppercase">
        <Link to="/" className="text-[var(--color-text-secondary)]">HOME</Link>
        <Link to="/projects" className="text-[var(--color-text-secondary)]">PROJECTS</Link>
      </div>
    </nav>
  );
}
