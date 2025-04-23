import React from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import HexBackground from './HexBackground'  // Si decides usar el fondo de hexágonos

const Header = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine) // Versión ligera de tsparticles
  }

  return (
    <motion.header
      id="inicio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#323642',
        color: 'white',
        padding: '6rem 2rem',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '2rem auto',
        height: '400px', // Especifica la altura fija para el contenedor
      }}
    >

<div
  style={{
    position: 'absolute',
    inset: 0, // Reemplaza top, left, width, height
    zIndex: 0,
    overflow: 'hidden',
    pointerEvents: 'none' // opcional
  }}
>
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: {
        color: '#323642'
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 12,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#00bcd4'
        },
        shape: {
          type: 'polygon',
          polygon: {
            nb_sides: 6
          }
        },
        opacity: {
          value: 0.2
        },
        size: {
          value: 60,
          random: true
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          outMode: 'bounce'
        }
      },
      detectRetina: true
    }}
  />
</div>


      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>DESARROLLO</h1>
        <h2 style={{ fontWeight: 'normal', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Desarrollador Web | Portafolio
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Soy un desarrollador web apasionado por crear soluciones eficientes y visualmente atractivas.
          Bienvenido a mi portafolio en línea.
        </p>
      </div>
    </motion.header>
  )
}

export default Header
