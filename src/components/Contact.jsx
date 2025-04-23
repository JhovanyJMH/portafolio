import React from 'react'

const Contact = () => {
  return (
    <section id='contacto'>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contacto</h2>
      <p>¿Quieres trabajar conmigo? ¡Contáctame!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Email:</strong> <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tuusuario" target="_blank">linkedin.com/in/tuusuario</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/tuusuario" target="_blank">github.com/tuusuario</a></li>
      </ul>
    </section>
  )
}

export default Contact

