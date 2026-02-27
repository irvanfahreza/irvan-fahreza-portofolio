import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, LayoutTemplate } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EMC (Energy Market Company)',
    client: 'PT Cxrus Solution Indonesia',
    period: 'Aug 2024 - Present',
    description: 'A mission-critical energy trading and settlement platform for EMC Singapore facilitating 24/7 wholesale electricity transactions. Managed microservices and high-volume transactional data.',
    tags: ['Java Spring Boot (Java 8/17)', 'Oracle', 'Angular20', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Healthkathon',
    client: 'BPJS Kesehatan Pusat',
    period: 'June 2024',
    description: 'A web-based system application opening competitions to the public in Security, Innovation System, and AI categories. Handled API integrations.',
    tags: ['Java Jersey', 'Microsoft SQL Server'],
  },
  {
    id: 3,
    title: 'DIAN (Direktori Inovasi dan Aset Pengetahuan)',
    client: 'BPJS Kesehatan Pusat',
    period: 'May 2024',
    description: 'Web-based system application for submitting ideas and innovations in BPJS Kesehatan including CRUD features and API integration.',
    tags: ['PHP', 'CodeIgniter', 'Microsoft SQL Server'],
  },
  {
    id: 4,
    title: 'DIANSIPINTER (Direktori Inovasi Dan Aset Pengetahuan, Sistem Pembelajaran Terintegrasi)',
    client: 'BPJS Kesehatan Pusat',
    period: 'Jan 2024 - Apr 2024',
    description: 'Web application system for competency certification activities. Analyzed and optimized DB bottlenecks replacing them with 10+ stored procedures.',
    tags: ['PHP', 'CodeIgniter', 'Microsoft SQL Server'],
  },
  {
    id: 5,
    title: 'Diamond (Digital Asesmen Online and Hybrid)',
    client: 'BPJS Kesehatan Pusat',
    period: 'Sep 2023 - Dec 2023',
    description: 'Documentation of competency certification activities with 6 user roles and complex approval flows.',
    tags: ['Java Spring Boot', 'Angular13', 'Microsoft SQL Server', 'HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'RefSatKer (Referensi Online Satuan Kerja)',
    client: 'BPJS Kesehatan Pusat',
    period: 'June 2023 - July 2023',
    description: 'System for managing Work Units at BPJS Kesehatan with 3 central roles and data approval workflows.',
    tags: ['ASP .NET', 'Angular14', 'Microsoft SQL Server', 'HTML'],
  },
  {
    id: 7,
    title: 'SIKAP (Sistem Informasi Pengelolaan Kepatuhan)',
    client: 'BPJS Kesehatan Pusat',
    period: 'Mar 2023 - May 2023',
    description: 'Employee compliance risk identification process system featuring CRUD functionality and API provisions.',
    tags: ['Java Spring Boot', 'Microsoft SQL Server', 'Angular15', 'HTML', 'CSS'],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Client Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-icon-wrapper">
                <LayoutTemplate size={32} className="accent" />
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-meta">
                  <div className="meta-item">
                    <Building2 size={16} />
                    <span>{project.client}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{project.period}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .project-card {
          border-radius: 1rem;
          padding: 2.5rem 2rem 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent);
        }

        .project-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 1rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .project-icon-wrapper .accent {
          color: var(--accent);
        }

        .project-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex: 1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          font-size: 0.75rem;
          color: var(--accent-hover);
          background: rgba(59, 130, 246, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 2rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Projects;
