export default function ProjectCard({ title, description, tags, demoUrl, githubUrl, imageUrl }) {
  return (
    <div className="flex flex-col rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-mid)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,163,255,0.08)] overflow-hidden">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden border-b border-[var(--color-border-subtle)] bg-[#121212] relative group">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
          />
        </div>
      )}
      <div className="flex flex-col p-8 flex-grow">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
        <p className="text-[var(--color-text-secondary)] text-[0.9rem] leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span key={i} className="text-[0.75rem] font-semibold px-2.5 py-1 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto border-t border-[var(--color-border-subtle)] pt-6 flex flex-col sm:flex-row gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center py-2.5 rounded-xl bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] font-bold text-sm tracking-wide transition-all hover:bg-[var(--color-bg-base)]"
            >
              💻 GitHub
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center py-2.5 rounded-xl bg-[var(--color-accent)] text-[#0E1117] font-bold text-sm tracking-wide transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_24px_rgba(0,163,255,0.4)]"
            >
              ▶ View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
