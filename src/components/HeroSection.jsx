export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-32 px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0, 163, 255, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 20%, rgba(245, 158, 11, 0.05) 0%, transparent 55%),
          linear-gradient(160deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 50%, var(--color-bg-base) 100%)
        `
      }}></div>
      
      {/* Animated Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 163, 255, 0.015) 3px, rgba(0, 163, 255, 0.015) 4px)`
      }}></div>

      <div className="z-10 relative">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-[#00A3FF] bg-[#00A3FF]/10 px-4 py-1.5 rounded-full border border-[#00A3FF]/20 mb-8">
          Available for Work
        </div>
        
        <h1 className="text-5xl md:text-7xl leading-[1.1] font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#66C7FF]">
            Wandika Febriano Pangaribuan
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] mb-6">
          Senior Software Engineer | AI Engineer
        </h2>
        
        <p className="mt-6 text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Software Engineer turned AI Engineer — building scalable systems and intelligent products with 6+ years of backend, microservices, and data-driven development experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/wandika-pangaribuan/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            🔗 LinkedIn Profile
          </a>
          <a href="https://drive.google.com/file/d/1A2PJ3IHEONNmnjxb-t7O3bwNsbWebTjL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-lg font-medium hover:bg-[var(--color-bg-surface)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            📄 Download CV
          </a>
          <a href="https://github.com/wandikafp" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-lg font-medium hover:bg-[var(--color-bg-surface)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
