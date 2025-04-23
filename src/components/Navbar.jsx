import React from 'react'

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#282c34',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      zIndex: 1000
    }}>
      <a href="#inicio" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
      <a href="#experiencia" style={{ color: 'white', textDecoration: 'none' }}>Experiencia</a>
      <a href="#proyectos" style={{ color: 'white', textDecoration: 'none' }}>Proyectos</a>
      <a href="#contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
    </nav>
  )
}

export default Navbar
