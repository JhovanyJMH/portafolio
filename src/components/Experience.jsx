import React from 'react'

const experiences = [
  {
    company: "Empresa ABC",
    role: "Desarrollador Frontend",
    period: "Ene 2022 - Presente",
    description: "Desarrollé interfaces interactivas usando React y colaboré con el equipo de diseño para mejorar la experiencia de usuario."
  },
  {
    company: "Empresa XYZ",
    role: "Programador Web",
    period: "Jun 2020 - Dic 2021",
    description: "Participé en el desarrollo de aplicaciones web usando JavaScript y PHP, manteniendo sitios web corporativos."
  }
]

const Experience = () => {
  return (
    <section id='experiencia'>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="card">
        <h3>{exp.role} - <span style={{ color: '#555' }}>{exp.company}</span></h3>
        <p style={{ fontStyle: 'italic' }}>{exp.period}</p>
        <p>{exp.description}</p>
      </div>
      ))}
    </section>
  )
}

export default Experience
