import React from 'react';
import ProjectCard from './ProjectCard';
import project1Img from '../assets/project_1_banner.png';
import project2Img from '../assets/project_2_banner.png';
import project3Img from '../assets/project_3_banner.png';

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "🎙️ Speech Emotion Recognition",
      description: "A real-time negative emotion (anger, sadness, frustration) detection system for contact centers to reduce customer churn, utilizing CNN-BiLSTM + Attention architecture.",
      tags: ["Python", "TensorFlow", "FastAPI", "Streamlit"],
      githubUrl: "https://github.com/wandikafp/speech-emotion-recognition",
      demoUrl: "https://wandikafp.streamlit.app/Speech_Emotion_Recognition",
      imageUrl: project1Img
    },
    {
      title: "🛍️ Smart Shopper AI",
      description: "An AI shopping assistant powered by Gemini 2.5 Flash and MongoDB Vector Search to deliver semantic product recommendations.",
      tags: ["Python", "Gemini 2.5 Flash", "MongoDB Atlas", "Streamlit"],
      githubUrl: "https://github.com/wandikafp/SmartShopper_AI_Assistant",
      demoUrl: "https://wandikafp.streamlit.app/smart_shopper",
      imageUrl: project2Img
    },
    {
      title: "🏠 House Price Prediction",
      description: "An end-to-end machine learning pipeline for predicting property prices using Random Forest algorithms. Achieved RMSE 0.15.",
      tags: ["Scikit-learn", "Pandas", "Streamlit", "Docker"],
      githubUrl: "https://github.com/wandikafp",
      demoUrl: "https://wandikafp.streamlit.app/Prediksi_Harga_Rumah",
      imageUrl: project3Img
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>Featured Projects</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
      
      <div className="flex justify-center">
        <a 
          href="https://wandikafp.streamlit.app/Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3.5 bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-xl font-bold hover:bg-[var(--color-bg-surface)] hover:border-[var(--color-border-mid)] hover:text-[var(--color-accent)] transition-all shadow-sm"
        >
          Lihat Semua Proyek →
        </a>
      </div>
    </section>
  );
}
