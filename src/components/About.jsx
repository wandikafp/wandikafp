import React from 'react';

export default function About() {
  const bio = [
    "I am a Software Engineer with over 6 years of experience designing and developing scalable web applications, backend systems, and cloud-based solutions across e-commerce, enterprise, and digital platforms. My technical foundation in Java, Spring Boot, microservices, APIs, databases, and Google Cloud Platform has allowed me to build reliable production systems at scale.",
    "Now, I am actively expanding into AI Engineering by combining my software architecture expertise with machine learning, data engineering, and modern AI technologies. My goal is to bridge robust software engineering with practical AI implementation — creating intelligent systems that are not only innovative, but production-ready, maintainable, and business-focused.",
    "I am seeking opportunities where I can contribute as an AI Engineer, Backend Engineer, or Cloud/ML Engineer, particularly in roles involving machine learning systems, cloud infrastructure, and scalable AI product development."
  ];

  const metrics = [
    { num: "6+", label: "Years of Experience" },
    { num: "10+", label: "Projects Completed" },
    { num: "3", label: "Major Companies" },
    { num: "3", label: "Industries" }
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>👤 About Me</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
      </div>
      
      <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-2xl p-8 mb-12">
        {bio.map((p, idx) => (
          <p key={idx} className="text-[var(--color-text-secondary)] text-[1rem] leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-2xl p-6 text-center hover:border-[var(--color-border-mid)] transition-all">
            <div className="text-4xl font-extrabold text-[var(--color-accent)] mb-2">{m.num}</div>
            <div className="text-sm font-medium text-[var(--color-text-secondary)]">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
