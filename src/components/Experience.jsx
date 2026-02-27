import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'Independent Contractor / Various Clients',
    period: 'March 2023 - Present',
    description: [
      'Created web-based applications with a secure client-server architecture using Java, ASP .NET, and PHP.',
      'Developed and managed Microservices-based applications, handling multiple repositories with various technology lifecycles.',
      'Developed custom web solutions using the latest stack, including Angular.',
      'Modernized backend systems by upgrading Java versions from 11 to 17 to improve performance and maintainability.',
      'Managed application deployments through Jenkins CI/CD pipelines, ensuring consistent delivery across development and production environments.',
      'Collaborated with product owners and stakeholders on designing and developing web-based applications.',
      'Implemented automated security scanning using Checkmarx (SAST) to ensure data protection and regulatory compliance.',
      'Wrote both client-side and server-side code, including server-side APIs and persistent data storage using Oracle and Microsoft SQL Server.',
      'Developed and implemented responsive front-end designs, resulting in improved user experience.',
      'Collaborated with cross-functional teams to integrate various APIs and optimize server-side functionality.'
    ],
    skills: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Microservices', 'ASP.NET', 'PHP', 'Jenkins', 'SQL Server'],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot glass">
                <Briefcase size={20} className="accent" />
              </div>

              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="role">{exp.role}</h3>
                  <div className="period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="company">{exp.company}</h4>
                <ul className="description-list">
                  {exp.description.map((item, i) => (
                    <li key={i} className="description-item">{item}</li>
                  ))}
                </ul>

                <div className="skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 3rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-50%);
          z-index: 2;
          border: 2px solid var(--accent);
        }

        .timeline-dot .accent {
          color: var(--accent);
        }

        .timeline-content {
          padding: 2rem;
          border-radius: 1rem;
          position: relative;
          transition: transform 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .role {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
        }

        .company {
          font-size: 1.125rem;
          color: var(--accent);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .description-list {
          margin-bottom: 1.5rem;
          padding-left: 1.25rem;
        }

        .description-item {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          list-style-type: disc;
        }
        
        .description-item:last-child {
          margin-bottom: 0;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-hover);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 640px) {
          .timeline {
            padding-left: 1rem;
          }
          .timeline-dot {
            left: -1rem;
            width: 30px;
            height: 30px;
          }
          .timeline-dot svg {
            width: 14px;
            height: 14px;
          }
          .timeline-content {
            padding: 1.5rem;
          }
          .timeline-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
