import React from 'react';

export default function Experience() {
  const experiences = [
    {
        company: "DBS Bank",
        role: "Digibank Senior Software Engineer",
        period: "2022 — Present",
        description: [
            "Developed and maintained production-ready microservices for supporting critical banking operations",
            "Partnered with cross-functional teams to ensure high-quality feature delivery and strict adherence to organizational security standards",
            "Resolved high-impact technical issues, minimizing business downtime and ensuring continuous operational stability",
            "Conducted technical analysis and implementation planning, improving project delivery timelines by 20%",
        ],
        tech: ["Java", "Spring Framework", "MariaDB", "Docker", "OpenShift (OCP)"],
    },
    {
        company: "Blibli.com",
        role: "Software Development Engineer",
        period: "2021 — 2022",
        description: [
            "Developed and maintained B2B affiliate services enabling business partners to transact via high-scale APIs",
            "Built internal B2B platforms for finance operations, achieving a 50% improvement in process efficiency through automation",
            "Enhanced service reliability and scalability by integrating asynchronous messaging and caching layers into microservice architectures",
        ],
        tech: ["Vue.js", "Typescript", "Java", "Spring WebFlux", "MongoDB", "Kafka", "Redis", "Docker", "Kubernetes"],
    },
    {
        company: "Xtremax",
        role: "Software Developer",
        period: "2018 — 2021",
        description: [
            "Designed and maintained high-quality web applications for diverse enterprise clients",
            "Improved application stability and long-term maintainability by proactively refactoring legacy code modules",
            "Collaborated within Agile teams to deliver complex projects on schedule, consistently increasing client satisfaction",
        ],
        tech: [".NET Core", "MSSQL Server", "MySQL", "PostgreSQL", "RabbitMQ", "Docker", "Vue.js", "Kubernetes"],
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>💼 Work Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
      </div>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border-mid)] before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row md:items-center justify-between md:odd:flex-row-reverse group">
            <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full border-4 border-[var(--color-bg-base)] bg-[var(--color-accent)] text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-[8px] md:left-1/2"></div>
            <div className="w-full pl-8 md:pl-0 md:w-[calc(50%-2.5rem)]">
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-mid)] transition-all p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-[var(--color-text-primary)] text-xl">{exp.role}</h3>
                  <span className="text-[var(--color-accent)] text-sm font-semibold whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="text-[var(--color-text-secondary)] font-medium mb-4 flex items-center gap-2">
                  🏢 {exp.company}
                </div>
                <ul className="list-disc list-outside ml-4 mb-6 text-[var(--color-text-secondary)] space-y-2 text-sm leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                     <span key={i} className="text-[0.7rem] font-semibold px-2 py-1 rounded bg-[var(--color-bg-surface)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]">
                       {t}
                     </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
