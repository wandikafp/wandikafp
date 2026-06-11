import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-bg-base)] flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <footer className="text-center py-8 text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] mt-auto">
          &copy; {new Date().getFullYear()} Wandika Febriano Pangaribuan. Built in the Latent Space.
        </footer>
      </div>
    </Router>
  );
}

export default App;
