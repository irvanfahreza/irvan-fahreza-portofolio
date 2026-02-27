import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge glass">Fullstack Developer</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experienced Fullstack Developer specializing in Java, Spring Boot, Angular, and Microservices architecture. Proven track record in building secure, high-performance web applications and enterprise systems.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/src/assets/resume/Irvan_Fahreza_Full_Stack_Developer_Resume.pdf" className="btn btn-outline glass" target="_blank" rel="noopener noreferrer">
              Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Abstract geometric shape as placeholder for a photo or 3D element */}
          <div className="abstract-shape">
            <div className="shape-1"></div>
            <div className="shape-2 glass"></div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }
        
        /* Background Glow */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: var(--accent);
          filter: blur(150px);
          opacity: 0.15;
          border-radius: 50%;
          z-index: -1;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--accent-hover);
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .text-gradient {
          background: linear-gradient(90deg, var(--accent), #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-primary {
          background: var(--accent);
          color: white;
          border: 1px solid var(--accent);
        }
        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }
        .btn-outline {
          color: var(--text-primary);
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
        
        /* Abstract Visual */
        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .abstract-shape {
          position: relative;
          width: 300px;
          height: 300px;
        }
        .shape-1 {
          position: absolute;
          inset: 0;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: linear-gradient(45deg, var(--accent), #8b5cf6);
          animation: morph 8s ease-in-out infinite alternate;
        }
        .shape-2 {
          position: absolute;
          inset: -20px;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          z-index: 2;
          border: 1px solid rgba(255,255,255,0.2);
          animation: morph 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-description {
            margin: 0 auto 2.5rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            height: 400px;
          }
        }
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
