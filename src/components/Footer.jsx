import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: '#282c34',
      color: 'white',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
