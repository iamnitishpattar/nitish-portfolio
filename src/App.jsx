import React, { useState } from 'react';
import './index.css';

const projects = [
  {
    id: 1,
    title: 'HelixVault',
    description: 'A cloud-deployed full-stack app that encodes files into DNA sequences, simulates biological mutations, and recovers data using Reed-Solomon Error Correction.',
    tech: ['React', 'Next.js', 'FastAPI', 'Python'],
    github: 'https://github.com/iamnitishpattar/HelixVault'
  },
  {
    id: 2,
    title: 'Financial Market News Sentiment Analysis',
    description: 'An end-to-end Machine Learning project that performs Sentiment Analysis on financial market news headlines using NLP and a Random Forest Classifier to predict stock market movements.',
    tech: ['Python', 'Jupyter', 'Scikit-learn', 'NLP', 'Random Forest'],
    github: 'https://github.com/iamnitishpattar/Financial-Market-News-Sentiment-Analysis'
  },
  {
    id: 3,
    title: 'Real Estate Price Prediction',
    description: 'An analytical web application featuring interactive charts and a prediction form to forecast real estate prices using historical market data and XGBoost.',
    tech: ['Python', 'Flask', 'XGBoost', 'Machine Learning'],
    github: 'https://github.com/iamnitishpattar/-real-estate-price-prediction-'
  },
  {
    id: 4,
    title: 'SMS Spam Classifier',
    description: 'A beginner-friendly Natural Language Processing project that classifies SMS messages as spam or ham using TF-IDF and Naive Bayes, complete with a modern Flask web interface.',
    tech: ['HTML', 'Flask', 'NLP', 'Naive Bayes', 'TF-IDF'],
    github: 'https://github.com/iamnitishpattar/SMS-spam-classifier'
  }
];

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className="bg-glow"></div>
      
      <div className="container">
        <nav>
          <a href="#" className="logo">Welcome</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}>Contact</a>
          </div>
        </nav>

        <div className="section-divider" style={{ margin: '0 0 2rem 0' }}>
          <div className="glow-line"></div>
          <div className="glow-orb" style={{ animationDelay: '-1.5s' }}></div>
        </div>

        <section id="about" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span>Nitish Pattar</span></h1>
            <p>
              Machine Learning Enthusiast & Full-Stack Developer. I love bridging the gap between intelligent ML algorithms and beautiful, functional web applications.
            </p>
            <a href="#projects" className="btn btn-primary">View My Work</a>
          </div>
          <div className="hero-image">
            <img src="/hero_architecture.png" alt="Futuristic AI Architecture Diagram" />
          </div>
        </section>

        <div className="section-divider">
          <div className="glow-line"></div>
          <div className="glow-orb"></div>
        </div>

        <section id="projects" className="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} Nitish Pattar. Built with React.</p>
        </footer>
      </div>

      {isContactModalOpen && (
        <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsContactModalOpen(false)}>×</button>
            <h2>Contact Me</h2>
            <div className="contact-icons">
              <a href="mailto:Nitishpattar7@gmail.com" title="Email">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://www.instagram.com/imnitishpattar" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="tel:7483704050" title="Mobile">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
