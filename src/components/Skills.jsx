import React from 'react';

export default function Skills() {
  const skills = {
    "⌨️ Programming": [
        "Java", "Python", "SQL", "NoSQL", "Bash", "JavaScript", "C#"
    ],
    "🤖 ML / AI": [
        "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LSTM", "BERT", "Machine Learning Fundamentals", "Data Processing", "RAG Concepts"
    ],
    "📊 Visualization": [
        "Plotly", "Matplotlib", "Seaborn", "Tableau", "Streamlit", "Dashboard Development"
    ],
    "⚙️ DevOps & Tools": [
        "Docker", "FastAPI", "Spring Boot", "Git", "GCP", "Redis", "Airflow", "REST APIs", "Microservices", "CI/CD"
    ]
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>🛠️ Skills</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList], idx) => (
          <div key={idx} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-2xl p-6 hover:border-[var(--color-border-mid)] transition-all">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span key={i} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
