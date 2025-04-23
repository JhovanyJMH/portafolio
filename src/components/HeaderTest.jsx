import React from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const HeaderTest = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine) // versión ligera compatible con tsparticles v3
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#323642',
        color: 'white',
        textAlign: 'center',
        margin: '2rem auto',
        maxWidth: '900px'
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
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

      <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>DESARROLLO</h1>
        <h2 style={{ fontWeight: 'normal', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Desarrollador Web | Portafolio
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Soy un desarrollador web apasionado por crear soluciones eficientes y visualmente atractivas.
          Bienvenido a mi portafolio en línea.
        </p>
      </div>
    </motion.div>
  )
}

export default HeaderTest
