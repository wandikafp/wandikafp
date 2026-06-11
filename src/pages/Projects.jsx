import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "🎙️ Speech Emotion Recognition",
      description: "A real-time negative emotion (anger, sadness, frustration) detection system for contact centers to reduce customer churn, utilizing CNN-BiLSTM + Attention architecture.",
      tags: ["Python", "TensorFlow", "Keras", "FastAPI", "Librosa", "Streamlit", "Joblib"],
      githubUrl: "https://github.com/wandikafp/speech-emotion-recognition",
      demoUrl: "https://wandikafp.streamlit.app/Speech_Emotion_Recognition",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=Speech+Emotion+AI"
    },
    {
      title: "🛍️ Smart Shopper AI",
      description: "An AI shopping assistant powered by Gemini 2.5 Flash and MongoDB Vector Search to deliver semantic product recommendations.",
      tags: ["Python", "Gemini 2.5 Flash", "MongoDB Atlas", "SentenceTransformers", "Streamlit"],
      githubUrl: "https://github.com/wandikafp/SmartShopper_AI_Assistant",
      demoUrl: "https://wandikafp.streamlit.app/smart_shopper",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=Smart+Shopper+AI"
    },
    {
      title: "🏠 House Price Prediction",
      description: "An end-to-end machine learning pipeline for predicting property prices using Random Forest algorithms. Achieved RMSE 0.15.",
      tags: ["Scikit-learn", "Pandas", "Streamlit", "Docker"],
      githubUrl: "https://github.com/wandikafp",
      demoUrl: "https://wandikafp.streamlit.app/Prediksi_Harga_Rumah",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=House+Prices+ML"
    },
    {
      title: "🏦 SafeBank Customer Intelligence",
      description: "Building a customer intelligence system using NLP and RAG to analyze customer sentiment and provide personalized product recommendations.",
      tags: ["Python", "PGVector", "Groq API", "Streamlit", "Docker", "Sentence-Transformers"],
      githubUrl: "",
      demoUrl: "https://wandikafp.streamlit.app/customer_intelligence",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=Customer+Intelligence"
    },
    {
      title: "🎬 Movie Recommendation System",
      description: "Building a hybrid movie recommendation system combining Content-Based Filtering and Collaborative Filtering (SVD) for highly accurate recommendations.",
      tags: ["Python", "Scikit-learn", "Scikit-surprise", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      githubUrl: "",
      demoUrl: "https://colab.research.google.com/drive/1FN-DSbu5gBe_BXwsqfxve7ebnujzZrTR",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=Movie+Recommendation"
    },
    {
      title: "📊 Sentiment Analysis on Product Reviews",
      description: "Analyzing sentiment of e-commerce product reviews using NLP and LSTM models. Achieved an accuracy of 92%.",
      tags: ["Python", "TensorFlow", "NLTK", "Streamlit", "Docker"],
      githubUrl: "https://github.com/wandikafp",
      demoUrl: "https://sentiment-demo.streamlit.app",
      imageUrl: "https://via.placeholder.com/600x300/1E1E1E/00A3FF?text=Sentiment+Analysis"
    }
  ];

  return (
    <main className="min-h-screen py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>
            All Projects
          </h1>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-mid)] to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </main>
  );
}
