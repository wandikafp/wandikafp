import React from 'react';

export default function Education() {
  const education = {
    degree: "Bachelor of Engineering in Electrical Engineering",
    university: "Institut Teknologi Bandung",
    period: "2013 - 2018",
    gpa: "3.28 / 4.00"
  };

  const certifications = [
    { name: "Network Penetration Testing", issuer: "Cyber Academy Indonesia", year: "2025" },
    { name: "Web Penetration Testing", issuer: "Cyber Academy Indonesia", year: "2025" },
    { name: "Google Cyber Security", issuer: "Google", year: "2024" },
    { name: "Mastering AI Bootcamp", issuer: "Skill Academy", year: "2024" },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>🎓 Education</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
          </div>
          
          <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-mid)] transition-all p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-[var(--color-text-primary)] text-xl mb-1">{education.degree}</h3>
            <div className="text-[var(--color-text-secondary)] font-medium mb-3 flex items-center gap-2">
              🏛️ {education.university}
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
              <span className="text-[var(--color-accent)] text-sm font-semibold">{education.period}</span>
              <span className="text-[var(--color-text-secondary)] text-sm font-medium">GPA: <span className="text-[var(--color-text-primary)] font-bold">{education.gpa}</span></span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>🏆 Certifications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
          </div>
          
          <div className="grid gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-mid)] transition-all p-5 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)] text-[1.05rem] mb-1">{cert.name}</h3>
                  <div className="text-[var(--color-text-secondary)] text-sm font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-mid)]"></span>
                    {cert.issuer}
                  </div>
                </div>
                <span className="text-[var(--color-accent)] text-sm font-bold bg-[var(--color-accent)]/10 px-3 py-1 rounded-md self-start sm:self-auto">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
