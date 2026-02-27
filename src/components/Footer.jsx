import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h2 className="title footer-title">Let's Work Together</h2>
            <p className="footer-text">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:irvanfahreza45@gmail.com" className="btn btn-primary btn-large">
              Say Hello
            </a>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/irvan-fahreza-170256166/" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:irvanfahreza45@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Irvan Fahreza. Built with React & Vite.</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding-top: 6rem;
          background: linear-gradient(to bottom, var(--bg-primary), #000);
          border-top: 1px solid var(--border);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 6rem;
        }

        .footer-title {
          margin-bottom: 1.5rem;
        }

        .footer-text {
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 1.125rem;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 4rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-icon:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .footer-bottom {
          padding: 2rem 0;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
          border-top: 1px solid var(--border);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
