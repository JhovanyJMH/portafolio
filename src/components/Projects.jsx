import React from 'react'

const projects = [
  {
    title: "Portfolio Web",
    description: "Una página web responsiva creada con React para mostrar mi experiencia y proyectos personales.",
    link: "https://tusitio.com"
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación web para gestionar tareas diarias con funcionalidades de CRUD, usando React y LocalStorage.",
    link: "https://github.com/tuusuario/tareas"
  }
]

const Projects = () => {
  return (
    <section id='proyectos'>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Proyectos</h2>
      {projects.map((project, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
          backgroundColor: '#f0f0f0'
        }}>
          <h3 style={{ margin: '0 0 0.5rem' }}>{project.title}</h3>
          <p style={{ margin: '0 0 0.5rem' }}>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
            Ver proyecto
          </a>
        </div>
      ))}
    </section>
  )
}

export default Projects
