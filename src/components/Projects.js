import React from 'react';
import projects from '../projects.json';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div>
              {project.technologies.map(tech => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;